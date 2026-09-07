<script lang="ts">
import type { IconSvgElement } from '@hugeicons/svelte';
import type { ClassValue } from 'svelte/elements';

let {
	icon,
	class: className = 'size-3.5',
	strokeWidth = 2
}: {
	icon: IconSvgElement;
	class?: ClassValue;
	strokeWidth?: number;
} = $props();

function nodeAttrs(attrs: { readonly [key: string]: string | number }) {
	const result: Record<string, string | number> = {};
	for (const [name, value] of Object.entries(attrs)) {
		if (name === 'key') {
			continue;
		}
		if (strokeWidth != null && (name === 'stroke-width' || name === 'strokeWidth')) {
			result[name] = strokeWidth;
			continue;
		}
		result[name] = value;
	}
	return result;
}
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="none"
	stroke-width={strokeWidth}
	class={['block', className]}
	aria-hidden="true"
>
	{#each icon as node (node[1].key)}
		<svelte:element this={node[0]} {...nodeAttrs(node[1])}></svelte:element>
	{/each}
</svg>
