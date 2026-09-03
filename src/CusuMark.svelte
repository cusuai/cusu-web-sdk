<script lang="ts">
import type { ClassValue } from 'svelte/elements';

let { class: className = 'size-4' }: { class?: ClassValue } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="currentColor"
	class={className}
	aria-hidden="true"
>
	<rect x="5.5" y="4.5" width="13.5" height="5" rx="2.5" />
	<rect x="5.5" y="4.5" width="5" height="15" rx="2.5" />
	<rect x="5.5" y="14.5" width="13.5" height="5" rx="2.5" />
</svg>
