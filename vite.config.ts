import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const dts = `export type CusuConfig = {
	group: string;
	apiUrl: string;
	apiKey: string;
	locale?: 'en' | 'cs';
	showLauncher?: boolean;
};

export type IdentifyTraits = {
	name?: string;
	email?: string;
	phone?: string;
	[key: string]: string | undefined;
};

export type CusuError = {
	code: string;
	message: string;
};

export type CusuErrorHandler = (error: CusuError) => void;

type Cusu = {
	initialize(config: CusuConfig): void;
	identify(id: string, traits?: IdentifyTraits): void;
	open(): void;
	close(): void;
	isOpened(): boolean;
	showLauncher(): void;
	hideLauncher(): void;
	destroy(): void;
	onError(handler: CusuErrorHandler | null): void;
};

declare const Cusu: Cusu;
export default Cusu;
`;

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/paraglide',
			strategy: ['globalVariable', 'preferredLanguage', 'baseLocale'],
			emitTsDeclarations: true,
			emitGitIgnore: false
		}),
		tailwindcss(),
		svelte({
			compilerOptions: {
				css: 'injected',
				runes: true
			}
		}),
		{
			name: 'emit-dts',
			generateBundle() {
				this.emitFile({
					type: 'asset',
					fileName: 'index.d.ts',
					source: dts
				});
			}
		}
	],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'Cusu',
			formats: ['es', 'iife'],
			fileName: (format) => (format === 'es' ? 'index.js' : 'cusu.iife.js')
		},
		cssCodeSplit: false,
		emptyOutDir: true
	}
});
