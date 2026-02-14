<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';

	interface AccordionContext {
		readonly openValue: string | null;
		toggle: (value: string) => void;
		isOpen: (value: string) => boolean;
	}

	interface Props {
		title: string;
		value: string;
		children?: Snippet;
		class?: string;
	}

	let {
		title,
		value,
		children,
		class: className
	}: Props = $props();

	const ctx = getContext<AccordionContext>('accordion');

	const panelId = $derived(`accordion-panel-${value}`);
	const headerId = $derived(`accordion-header-${value}`);

	let contentRef: HTMLDivElement | undefined = $state();
	let contentHeight = $state(0);

	const isOpen = $derived(ctx.isOpen(value));

	// Check for reduced motion preference
	const prefersReducedMotion =
		typeof window !== 'undefined'
			? window.matchMedia('(prefers-reduced-motion: reduce)').matches
			: false;

	// Measure content height when open state changes or content changes
	$effect(() => {
		if (isOpen && contentRef) {
			contentHeight = contentRef.scrollHeight;
		}
	});

	function handleClick() {
		ctx.toggle(value);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			ctx.toggle(value);
		}
	}
</script>

<div
	data-slot="accordion-item"
	class={cn('border-b border-muted', className)}
>
	<h3>
		<button
			id={headerId}
			type="button"
			aria-expanded={isOpen}
			aria-controls={panelId}
			class={cn(
				'py-4 px-6 w-full flex items-center justify-between',
				'text-left font-medium text-foreground',
				'hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
				'transition-colors duration-200 cursor-pointer'
			)}
			onclick={handleClick}
			onkeydown={handleKeydown}
		>
			<span>{title}</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class={cn(
					'shrink-0 text-muted-foreground',
					prefersReducedMotion
						? ''
						: 'transition-transform duration-300',
					isOpen ? 'rotate-180' : ''
				)}
				aria-hidden="true"
			>
				<polyline points="6 9 12 15 18 9" />
			</svg>
		</button>
	</h3>
	<div
		id={panelId}
		role="region"
		aria-labelledby={headerId}
		class="overflow-hidden"
		style:height={isOpen ? `${contentHeight}px` : '0px'}
		style:transition={prefersReducedMotion
			? 'none'
			: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)'}
	>
		<div bind:this={contentRef} class="px-6 pb-4 text-muted-foreground">
			{@render children?.()}
		</div>
	</div>
</div>
