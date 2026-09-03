<script lang="ts">
let { levels, tick = 0, shift = 0 }: { levels: number[]; tick?: number; shift?: number } = $props();

const BAR_WIDTH = 2;
const STRIDE = 3.5;

function paint(element: Element): () => void {
	const canvas = element as HTMLCanvasElement;
	const ctx = canvas.getContext('2d');
	if (!ctx) {
		return () => {};
	}
	const draw = (): void => {
		void tick;
		const bars = levels;
		const offset = Math.min(1, Math.max(0, shift));
		const dpr = window.devicePixelRatio || 1;
		const width = Math.max(1, canvas.clientWidth);
		const height = Math.max(1, canvas.clientHeight);
		const pixelW = Math.round(width * dpr);
		const pixelH = Math.round(height * dpr);
		if (canvas.width !== pixelW || canvas.height !== pixelH) {
			canvas.width = pixelW;
			canvas.height = pixelH;
		}
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, width, height);
		const visible = Math.ceil(width / STRIDE) + 2;
		const slice = bars.slice(Math.max(0, bars.length - visible));
		const count = slice.length;
		if (count === 0) {
			return;
		}
		const span = height - 4;
		ctx.fillStyle = '#fff';
		for (let index = 0; index < count; index += 1) {
			const x = width - BAR_WIDTH - (count - 1 - index + offset) * STRIDE;
			if (x + BAR_WIDTH < 0) {
				continue;
			}
			const barHeight = Math.max(2, (slice[index] ?? 0) * span);
			ctx.beginPath();
			ctx.roundRect(x, (height - barHeight) / 2, BAR_WIDTH, barHeight, BAR_WIDTH);
			ctx.fill();
		}
	};
	$effect(draw);
	const observer = new ResizeObserver(draw);
	observer.observe(canvas);
	return () => observer.disconnect();
}
</script>

<canvas class="block h-8 w-full" {@attach paint} aria-hidden="true"></canvas>
