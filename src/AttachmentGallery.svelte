<script lang="ts">
	import ArrowLeft01Icon from '@hugeicons/core-free-icons/ArrowLeft01Icon';
	import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
	import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
	import { fade } from 'svelte/transition';
	import Icon from './Icon.svelte';

	let {
		open = $bindable(false),
		items = [],
		index = $bindable(0),
		closeLabel,
		prevLabel,
		nextLabel
	}: {
		open: boolean;
		items: { src: string; filename: string }[];
		index?: number;
		closeLabel: string;
		prevLabel: string;
		nextLabel: string;
	} = $props();

	const current = $derived(items[index] ?? null);
	const multiple = $derived(items.length > 1);

	const chromeBtn =
		'absolute z-10 inline-flex size-10 items-center justify-center rounded-full text-white outline-none hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/40';

	function close(): void {
		open = false;
	}

	function prev(): void {
		if (!multiple || items.length === 0) {
			return;
		}
		index = (index - 1 + items.length) % items.length;
	}

	function next(): void {
		if (!multiple || items.length === 0) {
			return;
		}
		index = (index + 1) % items.length;
	}

	function onKeydown(event: KeyboardEvent): void {
		if (!open) {
			return;
		}
		if (event.key === 'Escape') {
			event.preventDefault();
			close();
			return;
		}
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			prev();
			return;
		}
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			next();
		}
	}
</script>

<svelte:window onkeydowncapture={onKeydown} />

{#if open && current}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center font-sans"
		role="dialog"
		aria-modal="true"
		aria-label={current.filename}
		transition:fade={{ duration: 120 }}
	>
		<button type="button" class="absolute inset-0 bg-black/90" aria-label={closeLabel} onclick={close}
		></button>
		{#if multiple}
			<button type="button" class={[chromeBtn, 'top-1/2 left-3 -translate-y-1/2']} aria-label={prevLabel} onclick={prev}>
				<Icon icon={ArrowLeft01Icon} class="size-5" strokeWidth={2} />
			</button>
			<button type="button" class={[chromeBtn, 'top-1/2 right-3 -translate-y-1/2']} aria-label={nextLabel} onclick={next}>
				<Icon icon={ArrowRight01Icon} class="size-5" strokeWidth={2} />
			</button>
		{/if}
		<button type="button" class={[chromeBtn, 'top-3 right-3']} aria-label={closeLabel} onclick={close}>
			<Icon icon={Cancel01Icon} class="size-5" strokeWidth={2} />
		</button>
		<div class="relative z-10 flex max-h-[92vh] max-w-[92vw] flex-col items-center gap-3">
			<img
				src={current.src}
				alt={current.filename}
				class="max-h-[84vh] max-w-[92vw] rounded-lg object-contain select-none"
			/>
			<p class="max-w-[92vw] truncate text-center text-sm text-white/80">
				{current.filename}{#if multiple}
					<span class="text-white/50"> · {index + 1}/{items.length}</span>
				{/if}
			</p>
		</div>
	</div>
{/if}
