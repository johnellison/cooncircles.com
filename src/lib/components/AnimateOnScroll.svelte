<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		delay?: number;
		threshold?: number;
		direction?: 'up' | 'down' | 'left' | 'right';
		class?: string;
	}

	let {
		children,
		delay = 0,
		threshold = 0.1,
		direction = 'up',
		class: className = ''
	}: Props = $props();

	let elementRef: HTMLDivElement;
	let isInView = $state(false);

	// Check for reduced motion preference
	const prefersReducedMotion = typeof window !== 'undefined'
		? window.matchMedia('(prefers-reduced-motion: reduce)').matches
		: false;

	// Set up initial transform based on direction
	const initialTransform = $derived(() => {
		if (prefersReducedMotion) return 'none';
		switch (direction) {
			case 'up': return 'translateY(30px)';
			case 'down': return 'translateY(-30px)';
			case 'left': return 'translateX(30px)';
			case 'right': return 'translateX(-30px)';
			default: return 'translateY(30px)';
		}
	});

	// Animation styles
	const animationStyle = $derived(() => {
		if (prefersReducedMotion) {
			return 'opacity: 1; transform: none;';
		}

		if (isInView) {
			return `
				opacity: 1;
				transform: translateY(0) translateX(0);
				transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}s,
				           transform 600ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}s;
			`;
		}

		return `
			opacity: 0;
			transform: ${initialTransform()};
		`;
	});

	onMount(() => {
		if (!elementRef) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isInView = true;
					}
				});
			},
			{ threshold }
		);

		observer.observe(elementRef);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div
	bind:this={elementRef}
	class={className}
	style={animationStyle()}
>
	{@render children?.()}
</div>
