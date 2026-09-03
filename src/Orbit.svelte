<script lang="ts">
import type { HTMLButtonAttributes } from 'svelte/elements';

let {
	tone = 'idle',
	energy = 0.16,
	size = 'sm',
	disabled = false,
	onclick,
	class: className,
	...rest
}: HTMLButtonAttributes & {
	tone?: 'idle' | 'cold' | 'warm';
	energy?: number;
	size?: 'sm' | 'lg';
} = $props();

const level = $derived(Math.min(1, Math.max(0.06, energy)));
</script>

{#snippet orb()}
	<span class="bloom"></span>
	<span class="corona"></span>
	<span class="body">
		<span class="flow">
			<span class="wash one"></span>
			<span class="wash two"></span>
			<span class="wash three"></span>
		</span>
		<span class="spec"></span>
	</span>
{/snippet}

{#if onclick}
	<button
		{...rest}
		type="button"
		class={['orbit', size, tone, className]}
		style:--energy={level}
		{onclick}
		{disabled}
	>
		{@render orb()}
	</button>
{:else}
	<div class={['orbit', size, tone, className]} style:--energy={level} aria-hidden="true">
		{@render orb()}
	</div>
{/if}

<style>
.orbit {
	--scale: calc(0.78 + var(--energy) * 0.62);
	position: relative;
	display: inline-flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	overflow: visible;
	appearance: none;
	border: 0;
	outline: none;
	border-radius: 9999px;
	background: transparent;
	padding: 0;
	box-shadow: none;
	transform: scale(var(--scale));
	transition:
		transform 70ms ease-out,
		filter 120ms ease-out;
	will-change: transform;
}

.orbit.sm {
	width: 2rem;
	height: 2rem;
}

.orbit.lg {
	width: 7.5rem;
	height: 7.5rem;
}

.orbit:is(button):not(:disabled):hover {
	transform: scale(calc(var(--scale) * 1.08));
}

.orbit.idle {
	--smoke: #c084fc;
	--smoke-2: #22d3ee;
	--smoke-3: #818cf8;
	--core: oklch(0.18 0.04 290);
}

.orbit.cold {
	--smoke: #38bdf8;
	--smoke-2: #67e8f9;
	--smoke-3: #60a5fa;
	--core: oklch(0.17 0.04 240);
}

.orbit.warm {
	--smoke: #fb923c;
	--smoke-2: #f87171;
	--smoke-3: #fbbf24;
	--core: oklch(0.18 0.05 50);
}

.bloom {
	position: absolute;
	inset: -38%;
	border-radius: 9999px;
	background: radial-gradient(
		circle,
		color-mix(in oklch, var(--smoke) 55%, transparent) 0%,
		color-mix(in oklch, var(--smoke) 18%, transparent) 42%,
		transparent 72%
	);
	filter: blur(10px);
	opacity: calc(0.45 + var(--energy) * 0.55);
	transform: scale(calc(0.72 + var(--energy) * 0.7));
	pointer-events: none;
}

.lg .bloom {
	inset: -62%;
	filter: blur(22px);
}

.corona {
	position: absolute;
	inset: -8%;
	border-radius: 9999px;
	box-shadow:
		0 0 calc(14px + var(--energy) * 28px) color-mix(in oklch, var(--smoke) 70%, transparent),
		0 0 calc(32px + var(--energy) * 56px) color-mix(in oklch, var(--smoke) 48%, transparent),
		0 0 calc(56px + var(--energy) * 96px) color-mix(in oklch, var(--smoke-2) 32%, transparent),
		0 0 calc(88px + var(--energy) * 140px) color-mix(in oklch, var(--smoke) 18%, transparent);
	pointer-events: none;
}

.sm .corona {
	box-shadow:
		0 0 calc(6px + var(--energy) * 10px) color-mix(in oklch, var(--smoke) 65%, transparent),
		0 0 calc(14px + var(--energy) * 22px) color-mix(in oklch, var(--smoke) 40%, transparent);
}

.body {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 9999px;
	background:
		radial-gradient(
			circle at 32% 26%,
			color-mix(in oklch, var(--smoke) 28%, transparent),
			transparent 42%
		),
		radial-gradient(
			circle at 50% 80%,
			color-mix(in oklch, var(--smoke) 18%, transparent),
			transparent 55%
		),
		var(--core);
	box-shadow: inset 0 -10px 18px oklch(0 0 0 / 0.4);
}

.flow {
	position: absolute;
	inset: -28%;
	animation: swirl calc(8.4s - var(--energy) * 4.2s) linear infinite;
}

.wash {
	position: absolute;
	border-radius: 60% 40% 55% 45%;
	filter: blur(10px);
	mix-blend-mode: plus-lighter;
	opacity: calc(0.42 + var(--energy) * 0.5);
}

.lg .wash {
	filter: blur(18px);
}

.one {
	top: -8%;
	left: 4%;
	width: 78%;
	height: 62%;
	background: radial-gradient(circle, var(--smoke-2) 0%, transparent 70%);
	animation: drift calc(3.6s - var(--energy) * 1.6s) ease-in-out infinite alternate;
}

.two {
	right: -12%;
	bottom: -6%;
	width: 74%;
	height: 68%;
	background: radial-gradient(circle, var(--smoke) 0%, transparent 72%);
	border-radius: 40% 60% 45% 55%;
	animation: drift calc(4.4s - var(--energy) * 1.8s) ease-in-out infinite alternate-reverse;
}

.three {
	top: 28%;
	left: 22%;
	width: 48%;
	height: 44%;
	background: radial-gradient(circle, var(--smoke-3) 0%, transparent 68%);
	opacity: calc(0.28 + var(--energy) * 0.55);
	animation: pulse calc(2.2s - var(--energy) * 1.1s) ease-in-out infinite alternate;
}

.spec {
	position: absolute;
	top: 16%;
	left: 24%;
	z-index: 1;
	width: 26%;
	height: 16%;
	border-radius: 9999px;
	background: radial-gradient(circle, oklch(1 0 0 / 0.45), transparent 72%);
	opacity: calc(0.22 + var(--energy) * 0.28);
	filter: blur(1px);
	pointer-events: none;
}

@keyframes swirl {
	to {
		transform: rotate(1turn);
	}
}

@keyframes drift {
	from {
		transform: translate(-7%, 5%) scale(0.92);
	}
	to {
		transform: translate(8%, -7%) scale(1.1);
	}
}

@keyframes pulse {
	from {
		transform: scale(0.84);
		opacity: 0.4;
	}
	to {
		transform: scale(1.14);
		opacity: 0.95;
	}
}

@media (prefers-reduced-motion: reduce) {
	.orbit,
	.bloom,
	.wash,
	.spec {
		transition: none;
	}

	.flow,
	.wash {
		animation: none;
	}
}
</style>
