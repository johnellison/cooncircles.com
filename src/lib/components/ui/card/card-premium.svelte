<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="card-premium"
	class={cn(
		"bg-card text-card-foreground flex flex-col rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
