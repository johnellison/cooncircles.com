<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setContext } from 'svelte';
	import { cn } from '$lib/utils.js';

	interface Props {
		children?: Snippet;
		value?: string | null;
		class?: string;
	}

	let {
		children,
		value = $bindable(null),
		class: className
	}: Props = $props();

	let openValue = $state<string | null>(value ?? null);

	// Sync bindable prop with internal state
	$effect(() => {
		openValue = value ?? null;
	});

	function toggle(itemValue: string) {
		const newValue = openValue === itemValue ? null : itemValue;
		openValue = newValue;
		value = newValue;
	}

	function isOpen(itemValue: string): boolean {
		return openValue === itemValue;
	}

	setContext('accordion', {
		get openValue() {
			return openValue;
		},
		toggle,
		isOpen
	});
</script>

<div
	data-slot="accordion"
	class={cn('w-full divide-y divide-muted', className)}
	role="presentation"
>
	{@render children?.()}
</div>
