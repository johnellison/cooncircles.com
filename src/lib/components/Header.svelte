<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';

	function isActive(path: string): boolean {
		return $page.url.pathname.startsWith(path);
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-footer-dark">
	<div class="container mx-auto px-4 md:px-6">
		<div class="flex items-center justify-between h-16">
			<a href="/" class="flex items-center space-x-2">
				<img src="/logo-white.png" alt="Coon" class="h-8 w-auto" />
			</a>

			<div class="hidden md:flex items-center space-x-8">
				<a
					href="/offerings"
					class="text-sm font-medium transition-colors hover:text-white/80 {isActive('/offerings') ? 'text-white' : 'text-white/70'}"
				>
					Offerings
				</a>
				<a
					href="/about"
					class="text-sm font-medium transition-colors hover:text-white/80 {isActive('/about') ? 'text-white' : 'text-white/70'}"
				>
					About
				</a>
				<a
					href="/contact"
					class="text-sm font-medium transition-colors hover:text-white/80 {isActive('/contact') ? 'text-white' : 'text-white/70'}"
				>
					Contact
				</a>
			</div>

			<div class="flex items-center space-x-4">
				<Button variant="secondary" size="sm" asChild>
					<a href="https://calendly.com/fatma-ghedira/30min" target="_blank" rel="noopener">
						Book time with me
					</a>
				</Button>
			</div>
		</div>
	</div>
</nav>
