<script lang="ts">
import ArrowLeft01Icon from '@hugeicons/core-free-icons/ArrowLeft01Icon';
import Attachment01Icon from '@hugeicons/core-free-icons/Attachment01Icon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import Mic01Icon from '@hugeicons/core-free-icons/Mic01Icon';
import PlusSignIcon from '@hugeicons/core-free-icons/PlusSignIcon';
import SendIcon from '@hugeicons/core-free-icons/SendIcon';
import { onMount } from 'svelte';
import { cubicOut } from 'svelte/easing';
import { prefersReducedMotion } from 'svelte/motion';
import { fly, type TransitionConfig } from 'svelte/transition';
import AttachmentGallery from './AttachmentGallery.svelte';
import CusuMark from './CusuMark.svelte';
import type { ConversationSummary, GroupChat } from './chat.svelte';
import FileAttachment from './FileAttachment.svelte';
import { formatRowWhen, formatWhen, groupHistory, type RecencyId } from './history';
import Icon from './Icon.svelte';
import Markdown from './Markdown.svelte';
import type { ThreadAttachment } from './messages';
import Orbit from './Orbit.svelte';
import * as m from './paraglide/messages.js';
import { getLocale } from './paraglide/runtime.js';
import { scrollToBottom } from './scroll';
import { isClosedStatus, isTransferredStatus } from './types';
import Waveform from './Waveform.svelte';

let { chat }: { chat: GroupChat } = $props();
let scroller: HTMLDivElement | undefined = $state();
let fileInput: HTMLInputElement | undefined = $state();
let galleryOpen = $state(false);
let galleryIndex = $state(0);
let galleryItems = $state<{ src: string; filename: string }[]>([]);

const chromeBtn =
	'absolute z-10 inline-flex size-9 items-center justify-center rounded-full border border-transparent bg-muted/60 text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30';

const askBtn =
	'inline-flex h-8 items-center rounded-full border border-transparent bg-primary px-3.5 text-xs font-medium text-primary-foreground shadow-sm transition duration-200 ease-out hover:scale-[1.04] hover:bg-primary/80 hover:shadow-md active:scale-[0.98]';

const roundBtn =
	'inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-transparent text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50';

const ratingBtn =
	'inline-flex size-9 items-center justify-center rounded-full text-lg outline-none hover:bg-muted hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50';

function fromLauncher(_node: Element): TransitionConfig {
	if (prefersReducedMotion.current) {
		return { duration: 0 };
	}
	return {
		duration: 260,
		easing: cubicOut,
		css: (t, u) =>
			`opacity: ${t}; transform: translateY(${16 * u}px) scale(${0.12 + 0.88 * t}); transform-origin: 100% 100%;`
	};
}

function recordReveal(node: HTMLElement): TransitionConfig {
	if (prefersReducedMotion.current) {
		return { duration: 0 };
	}
	const height = node.getBoundingClientRect().height;
	return {
		duration: 240,
		easing: cubicOut,
		css: (t) => `overflow: hidden; opacity: ${t}; height: ${t * height}px;`
	};
}

onMount(() => {
	chat.connect();
	return () => chat.disconnect();
});

$effect(() => {
	chat.open;
	chat.view;
	chat.recording;
	chat.transcribing;
	chat.messages.length;
	chat.messages.at(-1)?.text;
	chat.messages.at(-1)?.transcribing;
	chat.messages.at(-1)?.transcribed;
	chat.voiceMode;
	if (chat.view === 'chat') {
		scrollToBottom(scroller);
	}
});

function onWindowKeydown(event: KeyboardEvent): void {
	if (event.defaultPrevented) {
		return;
	}
	if (event.key !== 'Escape' || !chat.open) {
		return;
	}
	event.preventDefault();
	if (chat.recording) {
		void chat.cancelRecording();
		return;
	}
	chat.closePanel();
}

const voiceAttachments = $derived.by(() => {
	if (!chat.voiceMode) {
		return [] as ThreadAttachment[];
	}
	for (let i = chat.messages.length - 1; i >= 0; i -= 1) {
		const message = chat.messages[i];
		if (message?.role === 'agent' && message.attachments?.length) {
			return message.attachments;
		}
	}
	return [] as ThreadAttachment[];
});

function openGallery(startId: string): void {
	const items: { src: string; filename: string; id: string }[] = [];
	for (const message of chat.messages) {
		for (const attachment of message.attachments ?? []) {
			if (attachment.kind === 'image') {
				items.push({
					id: attachment.id,
					src: chat.attachmentSrc(attachment),
					filename: attachment.filename
				});
			}
		}
	}
	const index = items.findIndex((item) => item.id === startId);
	galleryItems = items.map(({ src, filename }) => ({ src, filename }));
	galleryIndex = index < 0 ? 0 : index;
	galleryOpen = true;
}

function submit(event: SubmitEvent): void {
	event.preventDefault();
	chat.send();
}

function onComposerKeydown(event: KeyboardEvent): void {
	if (event.key === 'Enter' && !event.shiftKey) {
		event.preventDefault();
		chat.send();
	}
}

function onComposerPaste(event: ClipboardEvent): void {
	if (chat.voiceMode) {
		return;
	}
	const files = [...(event.clipboardData?.files ?? [])];
	if (files.length === 0) {
		return;
	}
	event.preventDefault();
	void chat.addFiles(files);
}

function onComposerDrop(event: DragEvent): void {
	if (chat.voiceMode) {
		return;
	}
	const files = [...(event.dataTransfer?.files ?? [])];
	if (files.length === 0) {
		return;
	}
	event.preventDefault();
	void chat.addFiles(files);
}

function onFilePicked(event: Event): void {
	const input = event.currentTarget as HTMLInputElement;
	if (input.files && input.files.length > 0) {
		void chat.addFiles(input.files);
		input.value = '';
	}
}

function fitRows(node: HTMLTextAreaElement) {
	$effect(() => {
		void chat.draft;
		node.style.height = '0px';
		const styles = getComputedStyle(node);
		const line = Number.parseFloat(styles.lineHeight) || 20;
		const padding = Number.parseFloat(styles.paddingTop) + Number.parseFloat(styles.paddingBottom);
		node.style.height = `${Math.min(node.scrollHeight, line * 5 + padding)}px`;
	});
}

function roleLabel(role: string): string {
	if (role === 'customer') return m.role_you();
	if (role === 'operator') return m.role_operator();
	return m.role_assistant();
}

function toDateLocale(locale: string): string {
	return locale === 'de' ? 'de-DE' : locale === 'es' ? 'es-ES' : locale === 'sk' ? 'sk-SK' : locale === 'cs' ? 'cs-CZ' : 'en-US';
}

const LOCALE = $derived(toDateLocale(getLocale()));

function recencyLabels(): Record<RecencyId, string> {
	return {
		today: m.recency_today(),
		yesterday: m.recency_yesterday(),
		week: m.recency_week(),
		older: m.recency_older()
	};
}

function statusLabel(item: ConversationSummary): string {
	if (isClosedStatus(item.status)) {
		return m.status_closed();
	}
	if (isTransferredStatus(item.status, item.assignee)) {
		return m.status_operator();
	}
	return m.status_assistant();
}

const historySections = $derived(
	groupHistory(chat.history).map((section) => ({
		...section,
		label: recencyLabels()[section.id]
	}))
);
const showCall = $derived(
	chat.voiceCallEnabled &&
		chat.voiceRealtimeEnabled &&
		!chat.transferred &&
		chat.draft.trim().length === 0
);
</script>

<svelte:window onkeydown={onWindowKeydown} />

<div
	class="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3 font-sans antialiased text-foreground"
>
	{#if chat.open}
		<section
			class="relative flex h-[32rem] w-[22rem] origin-bottom-right flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card text-card-foreground shadow-xl"
			transition:fromLauncher
		>
			{#if chat.view !== 'history'}
				<button
					type="button"
					class={[chromeBtn, 'top-3 left-3']}
					aria-label={m.aria_back_to_list()}
					onclick={() => chat.showHistory()}
				>
					<Icon icon={ArrowLeft01Icon} class="size-5" strokeWidth={2} />
				</button>
			{/if}
			{#if chat.view === 'history' && chat.history.length > 0}
				<button
					type="button"
					class={[chromeBtn, 'top-3 right-14']}
					aria-label={m.aria_new_conversation()}
					onclick={() => chat.startNew()}
				>
					<Icon icon={PlusSignIcon} class="size-5" strokeWidth={2} />
				</button>
			{/if}
			<button
				type="button"
				class={[chromeBtn, 'top-3 right-3']}
				aria-label={m.aria_close()}
				onclick={() => chat.closePanel()}
			>
				<Icon icon={Cancel01Icon} class="size-5" strokeWidth={2} />
			</button>
			{#if chat.view === 'history'}
				{#if chat.history.length === 0}
					<div class="flex min-h-0 flex-1 flex-col items-center justify-center px-8 text-center">
						<h2 class="text-xl font-semibold tracking-tight">{m.empty_history_title()}</h2>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground">
							{m.empty_history_body()}
						</p>
						<button type="button" class={['mt-5', askBtn]} onclick={() => chat.startNew()}>
							{m.empty_history_ask()}
						</button>
					</div>
				{:else}
					<div class="min-h-0 flex-1 overflow-y-auto px-3 pt-14 pb-3">
						{#each historySections as section, index (section.id)}
							<section>
								<h2
									class={[
										'px-2 text-xs font-medium text-muted-foreground',
										index === 0 ? 'pt-1 pb-1' : 'pt-4 pb-1'
									]}
								>
									{section.label}
								</h2>
								<ul>
									{#each section.items as item (item.id)}
										<li class="rounded-xl hover:bg-muted/50">
											<button
												type="button"
												class="group/row flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
												onclick={() => chat.openThread(item.id)}
											>
												<span class="min-w-0 flex-1">
													<p class="truncate text-sm font-medium group-hover/row:underline">
														{item.preview || m.conversation_fallback()}
													</p>
													<p class="mt-0.5 truncate text-xs text-muted-foreground">
														{statusLabel(item)}
														{#if item.id === chat.currentId}
															· {m.status_current()}
														{/if}
													</p>
												</span>
												<span class="shrink-0 text-xs text-muted-foreground tabular-nums">
													{formatRowWhen(item.updatedAt, section.id, LOCALE)}
												</span>
											</button>
										</li>
									{/each}
								</ul>
							</section>
						{/each}
					</div>
				{/if}
			{:else if chat.voiceMode}
				<div class="relative flex min-h-0 flex-1 flex-col overflow-hidden">
					<div
						class={[
							'flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6',
							voiceAttachments.length > 0 && 'pb-28'
						]}
					>
						<Orbit size="lg" tone={chat.orbitTone} energy={chat.activityLevel} />
						<div class="relative flex h-10 w-full items-center justify-center overflow-hidden">
							{#key chat.callStatusLabel}
								<p
									class="absolute inset-x-0 text-center text-sm font-medium text-foreground"
									in:fly={{
										y: 12,
										duration: prefersReducedMotion.current ? 0 : 320,
										easing: cubicOut
									}}
									out:fly={{
										y: -12,
										duration: prefersReducedMotion.current ? 0 : 240,
										easing: cubicOut
									}}
									aria-live="polite"
								>
									{chat.callStatusLabel}
								</p>
							{/key}
						</div>
						<button
							type="button"
							class="h-8 rounded-full border border-transparent bg-destructive/10 px-3.5 text-xs font-medium text-destructive hover:bg-destructive/20"
							aria-label={m.aria_hangup()}
							onclick={() => chat.hangup()}
						>
							{m.hangup()}
						</button>
						{#if chat.error && !chat.closed}
							<p class="text-center text-xs text-destructive">{chat.error}</p>
						{/if}
					</div>
					{#if voiceAttachments.length > 0}
						<div
							class="absolute inset-x-3 bottom-3 z-20 flex max-h-[42%] flex-col gap-2 overflow-y-auto"
						>
							{#each voiceAttachments as attachment (attachment.id)}
								<div
									in:fly={{
										y: 18,
										duration: prefersReducedMotion.current ? 0 : 320,
										easing: cubicOut
									}}
								>
									{#if attachment.kind === 'image'}
										<button
											type="button"
											class="flex w-full items-center gap-3 rounded-2xl border border-border bg-background px-3 py-2.5 text-left text-foreground shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
											aria-label={m.aria_open_image()}
											onclick={() => openGallery(attachment.id)}
										>
											<img
												src={chat.attachmentSrc(attachment)}
												alt=""
												class="size-10 shrink-0 rounded-xl object-cover"
											>
											<span class="min-w-0 flex-1">
												<span class="block truncate text-sm font-medium"
													>{attachment.filename}</span
												>
												<span class="block text-[11px] text-muted-foreground"
													>{m.file_kind_image()}</span
												>
											</span>
										</button>
									{:else}
										<FileAttachment
											class="shadow-lg"
											href={chat.attachmentSrc(attachment)}
											filename={attachment.filename}
											byteSize={attachment.byteSize}
											downloadLabel={m.aria_download_file()}
											kindLabel={m.file_kind_pdf()}
										/>
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{:else}
				<div
					bind:this={scroller}
					class={[
						'min-h-0 flex-1 overflow-y-auto',
						chat.messages.length === 0 ? 'flex flex-col' : 'flex flex-col space-y-5 px-4 pt-16 pb-4'
					]}
				>
					{#if chat.messages.length === 0}
						<div
							class="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-8 text-center"
						>
							<h2 class="text-xl font-semibold tracking-tight">{m.empty_chat_title()}</h2>
							<p class="text-sm leading-relaxed text-muted-foreground">
								{m.empty_chat_body()}
							</p>
						</div>
					{/if}
					{#each chat.messages as message (message.id)}
						{@const mine = message.role === 'customer'}
						{@const images = message.attachments?.filter((item) => item.kind === 'image') ?? []}
						{@const files = message.attachments?.filter((item) => item.kind !== 'image') ?? []}
						{@const showTyping =
							Boolean(message.streaming) && !message.text && images.length === 0 && files.length === 0}
						{@const showTranscribing =
							Boolean(message.transcribing) &&
							!message.text &&
							images.length === 0 &&
							files.length === 0}
						{@const showBubble = Boolean(message.text) || showTyping || showTranscribing}
						<article
							class={[
								'flex w-fit max-w-[min(100%,18rem)] flex-col text-sm leading-relaxed break-words',
								mine ? 'ml-auto items-end' : 'items-start'
							]}
						>
							<p
								class={[
									'mb-1 text-[11px] font-medium text-muted-foreground',
									mine && 'text-right'
								]}
							>
								{roleLabel(message.role)}
								· {formatWhen(message.at, LOCALE)}
							</p>
							{#if images.length > 0}
								<div class={['flex flex-col gap-2', mine ? 'items-end' : 'items-start']}>
									{#each images as attachment (attachment.id)}
										<button
											type="button"
											class="block cursor-zoom-in overflow-hidden rounded-2xl border-0 bg-transparent p-0"
											aria-label={m.aria_open_image()}
											onclick={() => openGallery(attachment.id)}
										>
											<img
												src={chat.attachmentSrc(attachment)}
												alt={attachment.filename}
												class="max-h-48 w-auto max-w-full rounded-2xl object-cover"
											>
										</button>
									{/each}
								</div>
							{/if}
							{#if showBubble}
								<div
									class={[
										'rounded-[1.75rem] px-4 py-2.5',
										images.length > 0 && 'mt-2',
										mine ? 'bg-black text-white' : 'bg-muted'
									]}
								>
									{#if showTranscribing}
										<p class="opacity-70">{m.placeholder_transcribing()}</p>
									{:else if message.text}
										{#if message.role === 'customer'}
											<p class="whitespace-pre-wrap">{message.text}</p>
										{:else}
											<Markdown source={message.text} />
										{/if}
									{:else if showTyping}
										<p class={mine ? 'opacity-70' : 'text-muted-foreground'}>{m.typing()}</p>
									{/if}
								</div>
							{/if}
							{#if files.length > 0}
								<div
									class={[
										'flex w-full flex-col gap-2',
										(images.length > 0 || showBubble) && 'mt-2'
									]}
								>
									{#each files as attachment (attachment.id)}
										<FileAttachment
											href={chat.attachmentSrc(attachment)}
											filename={attachment.filename}
											byteSize={attachment.byteSize}
											downloadLabel={m.aria_download_file()}
											kindLabel={m.file_kind_pdf()}
										/>
									{/each}
								</div>
							{/if}
							{#if message.transcribing && message.text}
								<p class={['mt-1 text-[11px] text-muted-foreground', mine && 'text-right']}>
									{m.placeholder_transcribing()}
								</p>
							{:else if message.transcribed}
								<p class={['mt-1 text-[11px] text-muted-foreground', mine && 'text-right']}>
									{m.status_transcribed()}
								</p>
							{/if}
						</article>
					{/each}
					{#if chat.transferred && !chat.closed}
						<p class="text-center text-xs text-muted-foreground">
							{m.conversation_transferred()}
						</p>
					{/if}
					{#if chat.error && !chat.closed}
						<p class="text-center text-xs text-destructive">{chat.error}</p>
					{/if}
				</div>
				{#if chat.closed}
					<div
						class="mx-3 mb-3 rounded-3xl border border-border bg-muted/50 px-4 py-3 text-center text-sm text-muted-foreground"
					>
						{#if chat.status === 'resolved'}
							{#if chat.rated}
								<p>{m.rating_thanks()}</p>
							{:else}
								<p>{m.rating_prompt()}</p>
								<div class="mt-2 flex items-center justify-center gap-1">
									{#if chat.ratingScale === 'thumbs'}
										<button
											type="button"
											class={ratingBtn}
											disabled={chat.ratingBusy}
											aria-label={m.aria_rating_down()}
											onclick={() => chat.rate(0)}
										>
											👎
										</button>
										<button
											type="button"
											class={ratingBtn}
											disabled={chat.ratingBusy}
											aria-label={m.aria_rating_up()}
											onclick={() => chat.rate(1)}
										>
											👍
										</button>
									{:else if chat.ratingScale === 'faces_3'}
										<button
											type="button"
											class={ratingBtn}
											disabled={chat.ratingBusy}
											aria-label={m.aria_rating_sad()}
											onclick={() => chat.rate(1)}
										>
											😞
										</button>
										<button
											type="button"
											class={ratingBtn}
											disabled={chat.ratingBusy}
											aria-label={m.aria_rating_ok()}
											onclick={() => chat.rate(2)}
										>
											😐
										</button>
										<button
											type="button"
											class={ratingBtn}
											disabled={chat.ratingBusy}
											aria-label={m.aria_rating_happy()}
											onclick={() => chat.rate(3)}
										>
											😊
										</button>
									{:else}
										{#each [1, 2, 3, 4, 5] as star (star)}
											<button
												type="button"
												class={ratingBtn}
												disabled={chat.ratingBusy}
												aria-label={m.aria_rating_star({ star })}
												onclick={() => chat.rate(star)}
											>
												★
											</button>
										{/each}
									{/if}
								</div>
								{#if chat.error}
									<p class="mt-2 text-xs text-destructive">{chat.error}</p>
								{/if}
							{/if}
						{:else}
							<p>{m.conversation_closed()}</p>
						{/if}
					</div>
				{:else}
					<form
						class={[
							'relative mx-3 mb-3 overflow-hidden rounded-3xl border shadow-sm transition-[background-color,border-color] duration-200',
							chat.recording
								? 'border-transparent bg-black'
								: 'cursor-text border-border bg-background'
						]}
						onsubmit={submit}
						ondragover={(event) => event.preventDefault()}
						ondrop={onComposerDrop}
					>
						{#if chat.recording}
							<div class="flex items-center gap-1 py-1.5 pr-1.5 pl-3.5" transition:recordReveal>
								<div
									class="min-h-8 min-w-0 flex-1"
									role="status"
									aria-label={m.aria_recording()}
									aria-live="polite"
								>
									<Waveform levels={chat.levels} tick={chat.waveTick} shift={chat.waveShift} />
								</div>
								<button
									type="submit"
									class="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-transparent bg-white text-black hover:bg-white/90"
									aria-label={m.aria_send()}
								>
									<Icon icon={SendIcon} class="size-4" strokeWidth={2} />
								</button>
								<button
									type="button"
									class={[roundBtn, 'text-white/80 hover:bg-white/10 hover:text-white']}
									aria-label={m.aria_cancel_recording()}
									onclick={() => void chat.cancelRecording()}
								>
									<Icon icon={Cancel01Icon} class="size-4" strokeWidth={2} />
								</button>
							</div>
						{:else}
							<div class="relative" transition:recordReveal>
								{#if chat.pending.length > 0}
									<div class="flex flex-wrap gap-2 px-4 pt-3">
										{#each chat.pending as item (item.localId)}
											<div
												class="relative max-w-[7.5rem] overflow-hidden rounded-2xl bg-muted text-xs"
											>
												{#if item.previewUrl}
													<img src={item.previewUrl} alt={item.name} class="h-16 w-24 object-cover">
												{:else}
													<p class="truncate px-2 py-3">{item.name}</p>
												{/if}
												<button
													type="button"
													class="absolute top-1 right-1 inline-flex size-5 items-center justify-center rounded-full bg-black/70 text-white"
													aria-label={m.aria_remove_attachment()}
													onclick={() => chat.removePending(item.localId)}
												>
													<Icon icon={Cancel01Icon} class="size-3" strokeWidth={2} />
												</button>
												{#if item.uploading}
													<span
														class="absolute inset-x-0 bottom-0 bg-black/50 px-1 py-0.5 text-[10px] text-white"
													>
														…
													</span>
												{/if}
												{#if item.error}
													<p class="px-1 py-0.5 text-[10px] text-destructive">{item.error}</p>
												{/if}
											</div>
										{/each}
									</div>
								{/if}
								<textarea
									bind:value={chat.draft}
									rows="1"
									class="block min-h-10 w-full resize-none overflow-y-auto bg-transparent px-4 pt-3 pr-28 pb-12 text-sm leading-5 outline-none placeholder:text-muted-foreground/40 disabled:opacity-50"
									placeholder={chat.transcribing ? m.placeholder_transcribing() : m.placeholder_message()}
									aria-label={m.aria_message()}
									disabled={chat.transcribing}
									onkeydown={onComposerKeydown}
									onpaste={onComposerPaste}
									{@attach fitRows}
								></textarea>
								<input
									bind:this={fileInput}
									type="file"
									accept="image/jpeg,image/png,image/gif,image/webp,application/pdf"
									multiple
									class="hidden"
									onchange={onFilePicked}
								>
								<div class="absolute right-2 bottom-2 z-10 flex items-center gap-1">
									<button
										type="button"
										class={roundBtn}
										aria-label={m.aria_attach()}
										disabled={chat.transcribing || chat.pending.length >= 5}
										onclick={() => fileInput?.click()}
									>
										<Icon icon={Attachment01Icon} class="size-4" strokeWidth={2} />
									</button>
									{#if chat.dictationEnabled}
										<button
											type="button"
											class={roundBtn}
											aria-label={m.aria_dictate()}
											aria-pressed={false}
											disabled={chat.transcribing}
											onclick={() => chat.toggleMic()}
										>
											<Icon icon={Mic01Icon} class="size-4" strokeWidth={2} />
										</button>
									{/if}
									{#if showCall}
										<Orbit
											tone="idle"
											energy={0.22}
											aria-label={m.aria_call()}
											disabled={!chat.canStartCall}
											onclick={() => chat.startCall()}
										/>
									{:else}
										<button
											type="submit"
											class="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-transparent bg-primary text-primary-foreground hover:bg-primary/80 disabled:opacity-50"
											aria-label={m.aria_send()}
											disabled={!chat.canSend}
										>
											<Icon icon={SendIcon} class="size-4" strokeWidth={2} />
										</button>
									{/if}
								</div>
							</div>
						{/if}
					</form>
				{/if}
			{/if}
		</section>
	{/if}
	{#if chat.showLauncher}
		<button
			type="button"
			class="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg outline-none transition duration-200 ease-out hover:scale-110 hover:bg-primary/80 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring/30 active:scale-95"
			onclick={() => chat.toggle()}
			aria-label={chat.open ? m.aria_hide_chat() : m.aria_open_chat()}
		>
			{#if chat.open}
				<Icon icon={Cancel01Icon} class="size-6" strokeWidth={2} />
			{:else}
				<CusuMark class="size-7" />
			{/if}
		</button>
	{/if}
</div>

<AttachmentGallery
	bind:open={galleryOpen}
	bind:index={galleryIndex}
	items={galleryItems}
	closeLabel={m.aria_close()}
	prevLabel={m.aria_gallery_prev()}
	nextLabel={m.aria_gallery_next()}
/>
