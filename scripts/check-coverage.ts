/**
 * Enforces published coverage floors for open-source CI.
 *
 * After bunfig ignore patterns, Bun already requires ≥90% on remaining files.
 * This script dual-checks the pure-module list from docs/testing.md and prints a
 * clear table for the Actions log / local contributors.
 *
 * Reads `coverage/lcov.info` produced by `bun run test:coverage`.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const PURE_LINE_FLOOR = 0.9;
const PURE_FN_FLOOR = 0.9;

/** Pure helpers that must stay highly covered (see docs/testing.md). */
const PURE_MODULES = [
	'src/waveform.ts',
	'src/speech.ts',
	'src/vad.ts',
	'src/urls.ts',
	'src/history.ts',
	'src/types.ts',
	'src/messages.ts',
	'src/call-status.ts',
	'src/playback-meter.ts'
] as const;

type FileCoverage = {
	file: string;
	linesHit: number;
	linesFound: number;
	fnsHit: number;
	fnsFound: number;
};

function parseLcov(raw: string): Map<string, FileCoverage> {
	const files = new Map<string, FileCoverage>();
	let current: FileCoverage | null = null;

	for (const line of raw.split('\n')) {
		if (line.startsWith('SF:')) {
			const file = line.slice(3).replaceAll('\\', '/');
			const idx = file.lastIndexOf('/src/');
			const normalized =
				idx >= 0
					? `src/${file.slice(idx + '/src/'.length)}`
					: file.startsWith('src/')
						? file
						: file;
			current = {
				file: normalized,
				linesHit: 0,
				linesFound: 0,
				fnsHit: 0,
				fnsFound: 0
			};
			files.set(normalized, current);
			continue;
		}
		if (!current) {
			continue;
		}
		if (line.startsWith('LF:')) {
			current.linesFound = Number(line.slice(3));
		} else if (line.startsWith('LH:')) {
			current.linesHit = Number(line.slice(3));
		} else if (line.startsWith('FNF:')) {
			current.fnsFound = Number(line.slice(4));
		} else if (line.startsWith('FNH:')) {
			current.fnsHit = Number(line.slice(4));
		} else if (line === 'end_of_record') {
			current = null;
		}
	}
	return files;
}

function ratio(hit: number, found: number): number {
	if (found <= 0) {
		return 1;
	}
	return hit / found;
}

function pct(value: number): string {
	return `${(value * 100).toFixed(1)}%`;
}

function findEntry(files: Map<string, FileCoverage>, path: string): FileCoverage | undefined {
	if (files.has(path)) {
		return files.get(path);
	}
	for (const [key, value] of files) {
		if (key === path || key.endsWith(`/${path}`) || key.endsWith(path)) {
			return value;
		}
	}
	return undefined;
}

const lcovPath = resolve(import.meta.dir, '..', 'coverage', 'lcov.info');
let raw: string;
try {
	raw = readFileSync(lcovPath, 'utf8');
} catch {
	console.error(`Missing ${lcovPath}. Run: bun run test:coverage`);
	process.exit(1);
}

const files = parseLcov(raw);
const failures: string[] = [];

console.log('Pure-module coverage (OSS policy)');
console.log(`  required: lines ≥ ${pct(PURE_LINE_FLOOR)}, functions ≥ ${pct(PURE_FN_FLOOR)}`);
console.log('');

let totalHit = 0;
let totalFound = 0;

for (const path of PURE_MODULES) {
	const entry = findEntry(files, path);
	if (!entry) {
		failures.push(`${path}: missing from lcov (not imported by tests?)`);
		console.log(`  FAIL  ${path}  (not in report)`);
		continue;
	}
	const lines = ratio(entry.linesHit, entry.linesFound);
	const fns = ratio(entry.fnsHit, entry.fnsFound);
	totalHit += entry.linesHit;
	totalFound += entry.linesFound;
	const ok = lines + 1e-9 >= PURE_LINE_FLOOR && fns + 1e-9 >= PURE_FN_FLOOR;
	console.log(
		`  ${ok ? 'OK  ' : 'FAIL'}  ${path}  lines ${pct(lines)} (${entry.linesHit}/${entry.linesFound})  fns ${pct(fns)} (${entry.fnsHit}/${entry.fnsFound})`
	);
	if (!ok) {
		failures.push(
			`${path}: lines ${pct(lines)} / fns ${pct(fns)} (need ${pct(PURE_LINE_FLOOR)} / ${pct(PURE_FN_FLOOR)})`
		);
	}
}

console.log('');
console.log(
	`Pure-module line total: ${totalHit}/${totalFound} (${pct(ratio(totalHit, totalFound))})`
);
console.log('');

if (failures.length > 0) {
	console.error('Coverage policy failed:');
	for (const failure of failures) {
		console.error(`  - ${failure}`);
	}
	process.exit(1);
}

console.log('Coverage policy passed.');
