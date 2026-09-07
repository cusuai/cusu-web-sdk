<script lang="ts">
	import Download01Icon from '@hugeicons/core-free-icons/Download01Icon';
	import Pdf01Icon from '@hugeicons/core-free-icons/Pdf01Icon';
	import type { ClassValue } from 'svelte/elements';
	import Icon from './Icon.svelte';

	let {
		href,
		filename,
		byteSize = 0,
		downloadLabel,
		kindLabel,
		class: className = ''
	}: {
		href: string;
		filename: string;
		byteSize?: number;
		downloadLabel: string;
		kindLabel: string;
		class?: ClassValue;
	} = $props();

	let busy = $state(false);

	const meta = $derived.by(() => {
		const size = formatBytes(byteSize);
		return size ? `${kindLabel} · ${size}` : kindLabel;
	});

	async function download(event: MouseEvent): Promise<void> {
		event.preventDefault();
		event.stopPropagation();
		if (!href || href === '#' || busy) {
			return;
		}
		busy = true;
		try {
			await saveFile(href, filename);
		} catch {
			window.open(href, '_blank', 'noopener,noreferrer');
		} finally {
			busy = false;
		}
	}

	function formatBytes(bytes: number): string {
		if (!Number.isFinite(bytes) || bytes <= 0) {
			return '';
		}
		if (bytes < 1024) {
			return `${bytes} B`;
		}
		const kb = bytes / 1024;
		if (kb < 1024) {
			return `${kb < 10 ? kb.toFixed(1) : Math.round(kb)} KB`;
		}
		const mb = kb / 1024;
		return `${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`;
	}

	async function saveFile(url: string, name: string): Promise<void> {
		const objectUrl = url.startsWith('blob:') ? url : URL.createObjectURL(await fetchBlob(url));
		const link = document.createElement('a');
		link.href = objectUrl;
		link.download = name;
		link.rel = 'noreferrer';
		document.body.append(link);
		link.click();
		link.remove();
		if (!url.startsWith('blob:')) {
			URL.revokeObjectURL(objectUrl);
		}
	}

	async function fetchBlob(url: string): Promise<Blob> {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('download failed');
		}
		return response.blob();
	}
</script>

<div
	class={[
		'flex w-full items-center gap-3 rounded-2xl border border-border bg-background px-3 py-2.5 text-foreground shadow-sm',
		className
	]}
>
	<span
		class="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-foreground text-background"
		aria-hidden="true"
	>
		<Icon icon={Pdf01Icon} class="size-5" strokeWidth={2} />
	</span>
	<button
		type="button"
		class="min-w-0 flex-1 rounded-md border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
		onclick={() => {
			if (href && href !== '#') {
				window.open(href, '_blank', 'noopener,noreferrer');
			}
		}}
	>
		<p class="truncate text-sm font-medium">{filename}</p>
		<p class="text-[11px] text-muted-foreground">{meta}</p>
	</button>
	<button
		type="button"
		class="inline-flex size-8 shrink-0 items-center justify-center rounded-full border-0 bg-muted text-foreground outline-none hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring/30 disabled:opacity-50"
		aria-label={downloadLabel}
		disabled={busy || !href || href === '#'}
		onclick={download}
	>
		<Icon icon={Download01Icon} class="size-4" strokeWidth={2} />
	</button>
</div>
