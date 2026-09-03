<script lang="ts">
import ArrowLeft01Icon from '@hugeicons/core-free-icons/ArrowLeft01Icon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import Mic01Icon from '@hugeicons/core-free-icons/Mic01Icon';
import PlusSignIcon from '@hugeicons/core-free-icons/PlusSignIcon';
import SendIcon from '@hugeicons/core-free-icons/SendIcon';
import { onMount } from 'svelte';
import { cubicOut } from 'svelte/easing';
import { prefersReducedMotion } from 'svelte/motion';
import { fly, type TransitionConfig } from 'svelte/transition';
import CusuMark from './CusuMark.svelte';
import type { ConversationSummary, GroupChat } from './chat.svelte';
import { formatRowWhen, formatWhen, groupHistory, type RecencyId } from './history';
import Icon from './Icon.svelte';
import Markdown from './Markdown.svelte';
import Orbit from './Orbit.svelte';
import * as m from './paraglide/messages.js';
import { getLocale } from './paraglide/runtime.js';
import { scrollToBottom } from './scroll';
import Waveform from './Waveform.svelte';

let { chat }: { chat: GroupChat } = $props();
let scroller: HTMLDivElement | undefined = $state();

const chromeBtn =
	'absolute z-10 inline-flex size-9 items-center justify-center rounded-full border border-transparent bg-muted/60 text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30';

const askBtn =
	'inline-flex h-8 items-center rounded-full border border-transparent bg-primary px-3.5 text-xs font-medium text-primary-foreground shadow-sm transition duration-200 ease-out hover:scale-[1.04] hover:bg-primary/80 hover:shadow-md active:scale-[0.98]';

const roundBtn =
	'inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-transparent text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50';

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
	return locale === 'cs' ? 'cs-CZ' : 'en-US';
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

function statusLabel(status: ConversationSummary['status']): string {
	if (status === 'resolved') {
		return m.status_closed();
	}
	if (status === 'needs_operator' || status === 'waiting' || status === 'human') {
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
const showCall = $derived(!chat.transferred && chat.draft.trim().length === 0);
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
														{statusLabel(item.status)}
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
				<div
					class="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 overflow-visible px-6"
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
					{#if chat.error}
						<p class="text-center text-xs text-destructive">{chat.error}</p>
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
							<div
								class={[
									'rounded-[1.75rem] px-4 py-2.5',
									mine ? 'bg-black text-white' : 'bg-muted'
								]}
							>
								{#if message.transcribing && !message.text}
									<p class="opacity-70">{m.placeholder_transcribing()}</p>
								{:else if message.text}
									{#if message.role === 'agent'}
										<Markdown source={message.text} />
									{:else}
										<p class="whitespace-pre-wrap">{message.text}</p>
									{/if}
								{:else if message.streaming}
									<p class={mine ? 'opacity-70' : 'text-muted-foreground'}>{m.typing()}</p>
								{/if}
							</div>
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
					{#if chat.closed}
						<p class="text-center text-xs text-muted-foreground">{m.conversation_closed()}</p>
					{:else if chat.transferred}
						<p class="text-center text-xs text-muted-foreground">
							{m.conversation_transferred()}
						</p>
					{/if}
					{#if chat.error}
						<p class="text-xs text-destructive">{chat.error}</p>
					{/if}
				</div>
				{#if chat.closed}
					<p
						class="mx-3 mb-3 rounded-3xl border border-border bg-muted/50 px-4 py-3 text-center text-sm text-muted-foreground"
					>
						{m.conversation_closed()}
					</p>
				{:else}
					<form
						class={[
							'relative mx-3 mb-3 overflow-hidden rounded-3xl border shadow-sm transition-[background-color,border-color] duration-200',
							chat.recording
								? 'border-transparent bg-black'
								: 'cursor-text border-border bg-background'
						]}
						onsubmit={submit}
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
								<textarea
									bind:value={chat.draft}
									rows="1"
									class="block min-h-10 w-full resize-none overflow-y-auto bg-transparent px-4 pt-3 pr-20 pb-12 text-sm leading-5 outline-none placeholder:text-muted-foreground/40 disabled:opacity-50"
									placeholder={chat.transcribing ? m.placeholder_transcribing() : m.placeholder_message()}
									aria-label={m.aria_message()}
									disabled={chat.transcribing}
									onkeydown={onComposerKeydown}
									{@attach fitRows}
								></textarea>
								<div class="absolute right-2 bottom-2 z-10 flex items-center gap-1">
									<button
										type="button"
										class={roundBtn}
										aria-label={m.aria_dictate()}
										aria-pressed={false}
										disabled={chat.transcribing}
										onclick={() => chat.toggleMic()}
									>
										<Icon icon={Mic01Icon} class="size-4" />
									</button>
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
											<Icon icon={SendIcon} class="size-4" />
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
