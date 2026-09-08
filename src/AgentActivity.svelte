<script lang="ts">
import { cubicOut } from 'svelte/easing';
import { prefersReducedMotion } from 'svelte/motion';
import { fade, fly } from 'svelte/transition';
import CusuMark from './CusuMark.svelte';

let { label, stacked = false }: { label: string; stacked?: boolean } = $props();

const duration = $derived(prefersReducedMotion.current ? 0 : 220);
const outDuration = $derived(prefersReducedMotion.current ? 0 : 160);
const shift = $derived(prefersReducedMotion.current ? 0 : 6);
</script>

<div
	class={['action', stacked && 'stacked']}
	role="status"
	aria-live="polite"
	in:fly={{ y: shift, duration, easing: cubicOut }}
	out:fade={{ duration: outDuration }}
>
	<span class="mark" aria-hidden="true">
		<span class="ring"></span>
		<CusuMark class="size-[0.625rem]" />
	</span>
	<span class="label-slot">
		{#key label}
			<span
				class="label"
				in:fly={{ y: shift, duration, easing: cubicOut }}
				out:fly={{ y: -shift, duration: outDuration, easing: cubicOut }}
			>
				{label}
			</span>
		{/key}
	</span>
</div>

<style>
.action {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	min-height: 1.125rem;
	color: var(--muted-foreground);
}

.action.stacked {
	margin-top: 0.625rem;
}

.mark {
	position: relative;
	display: grid;
	width: 1.125rem;
	height: 1.125rem;
	flex-shrink: 0;
	place-items: center;
	color: var(--foreground);
}

.ring {
	position: absolute;
	inset: 0;
	border-radius: 9999px;
	background: conic-gradient(
		from 0deg,
		transparent 0 52%,
		color-mix(in oklch, var(--foreground) 78%, transparent) 72%,
		transparent 100%
	);
	-webkit-mask: radial-gradient(
		farthest-side,
		transparent calc(100% - 1.35px),
		#000 calc(100% - 1.2px)
	);
	mask: radial-gradient(farthest-side, transparent calc(100% - 1.35px), #000 calc(100% - 1.2px));
	animation: spin 0.9s linear infinite;
}

.label-slot {
	display: grid;
	align-items: center;
}

.label {
	grid-area: 1 / 1;
	font-size: 0.75rem;
	font-weight: 500;
	letter-spacing: -0.014em;
	line-height: 1.2;
	background-image: linear-gradient(
		90deg,
		var(--muted-foreground) 0%,
		var(--foreground) 42%,
		var(--muted-foreground) 82%
	);
	background-size: 220% 100%;
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	animation: shimmer 1.8s ease-in-out infinite;
}

@keyframes spin {
	to {
		transform: rotate(1turn);
	}
}

@keyframes shimmer {
	0% {
		background-position: 110% 50%;
	}
	100% {
		background-position: -30% 50%;
	}
}

@media (prefers-reduced-motion: reduce) {
	.ring,
	.label {
		animation: none;
	}

	.label {
		color: var(--muted-foreground);
		background: none;
		-webkit-background-clip: unset;
		background-clip: unset;
	}
}
</style>
