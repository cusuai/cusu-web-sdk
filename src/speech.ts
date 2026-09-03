const SENTENCE_BREAK = /[.!?…]["»”')\]]*(?:\s+|$)|(?:\n+)/;

export function splitSpeakable(buffer: string, force: boolean): { spoken: string[]; rest: string } {
	const spoken: string[] = [];
	let rest = buffer;
	while (rest) {
		const match = SENTENCE_BREAK.exec(rest);
		if (!match || match.index === undefined) {
			break;
		}
		const end = match.index + match[0].length;
		const chunk = rest.slice(0, end).replace(/\s+/g, ' ').trim();
		rest = rest.slice(end);
		if (chunk) {
			spoken.push(chunk);
		}
	}
	if (force) {
		const leftover = rest.replace(/\s+/g, ' ').trim();
		if (leftover) {
			spoken.push(leftover);
		}
		rest = '';
	}
	return { spoken, rest };
}
