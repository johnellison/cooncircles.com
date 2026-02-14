<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		paragraphs: string[];
		class?: string;
	}

	let {
		paragraphs,
		class: className = ''
	}: Props = $props();

	let containerRef: HTMLElement;
	let containerTop = $state(0);
	let containerHeight = $state(0);
	let windowHeight = $state(0);
	let scrollY = $state(0);
	let mounted = $state(false);

	// Check for reduced motion preference
	const prefersReducedMotion = typeof window !== 'undefined'
		? window.matchMedia('(prefers-reduced-motion: reduce)').matches
		: false;

	// Total scrollable height = number of paragraphs * 100vh
	const totalSections = $derived(paragraphs.length);

	// Calculate which paragraph is active and its opacity based on scroll position
	const paragraphStates = $derived(() => {
		if (!mounted || prefersReducedMotion) {
			return paragraphs.map((_, i) => ({
				opacity: prefersReducedMotion ? 1 : (i === 0 ? 1 : 0),
				translateY: 0,
				active: prefersReducedMotion || i === 0
			}));
		}

		// How far through the container we've scrolled (0 to 1)
		const scrollableHeight = containerHeight - windowHeight;
		if (scrollableHeight <= 0) {
			return paragraphs.map((_, i) => ({ opacity: i === 0 ? 1 : 0, translateY: 0, active: i === 0 }));
		}

		const relativeScroll = Math.max(0, scrollY - containerTop);
		const progress = Math.min(1, Math.max(0, relativeScroll / scrollableHeight));

		// Each paragraph occupies an equal portion of the scroll range
		const sectionSize = 1 / totalSections;

		return paragraphs.map((_, i) => {
			const sectionStart = i * sectionSize;
			const sectionEnd = (i + 1) * sectionSize;
			const fadeInEnd = sectionStart + sectionSize * 0.3;
			const fadeOutStart = sectionEnd - sectionSize * 0.3;

			let opacity = 0;
			let translateY = 20;

			if (progress >= sectionStart && progress <= sectionEnd) {
				// Fade in phase
				if (progress < fadeInEnd) {
					const fadeProgress = (progress - sectionStart) / (fadeInEnd - sectionStart);
					opacity = Math.min(1, fadeProgress);
					translateY = 20 * (1 - fadeProgress);
				}
				// Fully visible phase
				else if (progress < fadeOutStart) {
					opacity = 1;
					translateY = 0;
				}
				// Fade out phase
				else {
					const fadeProgress = (progress - fadeOutStart) / (sectionEnd - fadeOutStart);
					opacity = Math.max(0, 1 - fadeProgress);
					translateY = -10 * fadeProgress;
				}
			}

			// First paragraph should start visible
			if (i === 0 && progress < fadeInEnd) {
				opacity = Math.max(opacity, 1 - (progress / (sectionSize * 0.3)));
				if (progress === 0) {
					opacity = 1;
					translateY = 0;
				}
			}

			return {
				opacity: Math.max(0, Math.min(1, opacity)),
				translateY,
				active: opacity > 0.5
			};
		});
	});

	// Calculate progress indicator
	const scrollProgress = $derived(() => {
		if (!mounted) return 0;
		const scrollableHeight = containerHeight - windowHeight;
		if (scrollableHeight <= 0) return 0;
		const relativeScroll = Math.max(0, scrollY - containerTop);
		return Math.min(1, Math.max(0, relativeScroll / scrollableHeight));
	});

	function updateMeasurements() {
		if (!containerRef) return;
		const rect = containerRef.getBoundingClientRect();
		containerTop = rect.top + window.scrollY;
		containerHeight = containerRef.offsetHeight;
		windowHeight = window.innerHeight;
	}

	function handleScroll() {
		scrollY = window.scrollY;
	}

	onMount(() => {
		mounted = true;
		updateMeasurements();
		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', updateMeasurements, { passive: true });

		// Recalculate after layout settles
		const raf = requestAnimationFrame(() => {
			updateMeasurements();
		});

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', updateMeasurements);
			cancelAnimationFrame(raf);
		};
	});
</script>

<div
	bind:this={containerRef}
	class="relative {className}"
	style="height: {totalSections * 100}vh;"
>
	<!-- Sticky container that stays in viewport -->
	<div class="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
		<div class="max-w-4xl mx-auto px-6 relative w-full">
			{#each paragraphs as paragraph, i}
				<div
					class="absolute inset-0 flex items-center px-6"
					style="
						opacity: {paragraphStates()[i].opacity};
						transform: translateY({paragraphStates()[i].translateY}px);
						transition: {prefersReducedMotion ? 'none' : 'opacity 0.1s ease-out, transform 0.1s ease-out'};
						pointer-events: {paragraphStates()[i].active ? 'auto' : 'none'};
					"
				>
					<p class="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground font-medium">
						{paragraph}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Progress indicator -->
	{#if !prefersReducedMotion}
		<div class="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2 items-center">
			{#each paragraphs as _, i}
				{@const sectionSize = 1 / totalSections}
				{@const isActive = scrollProgress() >= i * sectionSize && scrollProgress() < (i + 1) * sectionSize}
				<div
					class="rounded-full transition-all duration-300 {isActive ? 'w-2 h-6 bg-earth-primary' : 'w-1.5 h-1.5 bg-muted-foreground/30'}"
				></div>
			{/each}
		</div>
	{/if}
</div>
