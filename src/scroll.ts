import { tick } from 'svelte';

export function scrollToBottom(element: HTMLElement | undefined): void {
	void tick().then(() => {
		element?.scrollTo({ top: element.scrollHeight });
	});
}
