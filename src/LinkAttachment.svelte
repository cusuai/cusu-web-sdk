<script lang="ts">
import Link01Icon from '@hugeicons/core-free-icons/Link01Icon';
import type { ClassValue } from 'svelte/elements';
import Icon from './Icon.svelte';

let {
	href,
	filename,
	kindLabel,
	openLabel,
	imageUrl = '',
	description = '',
	compact = false,
	class: className = ''
}: {
	href: string;
	filename: string;
	kindLabel: string;
	openLabel: string;
	imageUrl?: string;
	description?: string;
	compact?: boolean;
	class?: ClassValue;
} = $props();

let imageFailed = $state(false);

const host = $derived.by(() => {
	try {
		return new URL(href).hostname.replace(/^www\./i, '');
	} catch {
		return '';
	}
});

const showImage = $derived(Boolean(imageUrl) && !imageFailed);
const showBanner = $derived(showImage && !compact);
const showThumb = $derived(showImage && compact);
const showIcon = $derived(!showImage);
const showDescription = $derived(Boolean(description) && !compact);
const meta = $derived(host ? `${kindLabel} · ${host}` : kindLabel);
const safeHref = $derived(href && href !== '#' ? href : undefined);
</script>

<a
	href={safeHref}
	target="_blank"
	rel="noopener noreferrer"
	aria-label={openLabel}
	class={[
		'block w-full overflow-hidden rounded-2xl border border-border bg-background text-foreground no-underline shadow-sm outline-none hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/30',
		!safeHref && 'pointer-events-none opacity-60',
		className
	]}
>
	{#if showBanner}
		<img
			src={imageUrl}
			alt=""
			class="aspect-[1.91/1] max-h-28 w-full bg-muted object-cover"
			loading="lazy"
			decoding="async"
			onerror={() => (imageFailed = true)}
		/>
	{/if}
	<span class={['flex gap-3', compact ? 'items-center p-2' : 'items-start px-3 py-2.5']}>
		{#if showThumb}
			<img
				src={imageUrl}
				alt=""
				class="size-14 shrink-0 rounded-xl bg-muted object-cover"
				loading="lazy"
				decoding="async"
				onerror={() => (imageFailed = true)}
			/>
		{:else if showIcon}
			<span
				class="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-foreground text-background"
				aria-hidden="true"
			>
				<Icon icon={Link01Icon} class="size-5" strokeWidth={2} />
			</span>
		{/if}
		<span class="min-w-0 flex-1 text-left">
			<span class={['font-medium', compact ? 'line-clamp-2 text-[13px]' : 'line-clamp-2 text-sm']}
				>{filename}</span
			>
			{#if showDescription}
				<span class="mt-0.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground">{description}</span>
			{/if}
			<span class="mt-0.5 block truncate text-[11px] text-muted-foreground">{meta}</span>
		</span>
	</span>
</a>
