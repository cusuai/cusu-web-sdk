import DOMPurify from 'dompurify';
import { marked } from 'marked';

marked.setOptions({
	async: false,
	gfm: true,
	breaks: true
});

export function renderMarkdown(source: string): string {
	const html = marked.parse(source, { async: false });
	if (typeof window === 'undefined') {
		return html;
	}
	return DOMPurify.sanitize(html);
}
