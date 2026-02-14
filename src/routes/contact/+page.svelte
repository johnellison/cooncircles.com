<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { CardPremium, CardContent } from '$lib/components/ui/card';
</script>

<svelte:head>
	<title>Contact - Coon</title>
	<meta name="description" content="Connect. Convene. Create. Reach out to explore workshops, retreats, and gatherings designed for transformation and connection." />
</svelte:head>

<!-- Multi-Color Gradient Hero with White Text -->
<section class="relative py-32 bg-multi-gradient">
	<div class="container mx-auto px-4 md:px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Connect. Convene. Create. Together.</h1>
				<p class="text-lg text-white/80 mb-8 leading-relaxed">
					Let's create spaces for clarity, healing, and belonging. Reach out to explore workshops, retreats, and gatherings designed for transformation and connection.
				</p>
				<div class="flex flex-wrap gap-4">
					<Button variant="secondary" size="lg">Book time together here!</Button>
					<Button variant="secondary" size="lg" asChild>
						<a href="#contact">Contact Info</a>
					</Button>
				</div>
			</div>
			<div class="relative hidden lg:block">
				<img src="/contact-hero.jpg" alt="Peaceful gathering" class="rounded-lg shadow-2xl w-full object-cover" />
			</div>
		</div>
	</div>
</section>

<section id="contact" class="py-32 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Let's connect and collaborate</h2>
		<p class="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
			I'm here to listen, support, and guide you.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
			<CardPremium class="p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
				<div class="flex items-center gap-4 mb-4">
					<svg class="h-8 w-8 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="M7 8h10M7 12h10M7 16h10"></path></svg>
					<h3 class="text-xl font-bold text-foreground">Email</h3>
				</div>
				<p class="text-base text-muted-foreground mb-4">Send a note anytime. I'll reply soon.</p>
				<a href="mailto:fatma@cooncircles.com?subject=Contact%20From%20Coon%20Website" class="text-lg font-medium text-earth-primary hover:underline transition-colors">
					fatma@cooncircles.com
				</a>
			</CardPremium>

			<CardPremium class="p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
				<div class="flex items-center gap-4 mb-4">
					<svg class="h-8 w-8 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 0-2 2h-3.38a2 2 0 0 0 0-2 2h3.38v5.17H22v-5.17zM22 20.92a2 2 0 0 1-2 2H7.93a2 2 0 0 0-2 2h-4.15v6.53a2 2 0 0 1 2 2h4.15v2.89a2 2 0 0 1-2 2h2.87V6.5h5.29a2 2 0 0 1 2 2v2.52zM14.13 15h-3.29a2 2 0 0 0-2-08 2.02L13 13h-4a2 2 0 0 0-2-2h2.38a2 2 0 0 0 2 2h2.87a2 2 0 0 0-1.98.85-2.18L10 9.17l3.38 3.21a2 2 0 0 1-2.11-2.36l3.38-5.83a2 2 0 0 0-2.59-2.58L13 17h-4a2 2 0 0 0-1.98-.85-2.18l-3.38-5.83a2 2 0 0 0-2.59-2.58L10 9.17l3.38 3.21a2 2 0 0 1-2.11-2.36l3.38-5.83a2 2 0 0 0-2.59-2.58L10 9.17z"></path></svg>
					<h3 class="text-xl font-bold text-foreground">Phone or Whatsapp</h3>
				</div>
				<p class="text-base text-muted-foreground mb-4">Call weekdays for a warm welcome.</p>
				<p class="text-lg font-medium text-foreground">+216 29 83 83 29</p>
				<a href="https://wa.me/21629838329" target="_blank" rel="noopener" class="text-sm font-medium text-water hover:underline transition-colors">
					Open in WhatsApp
				</a>
			</CardPremium>

			<CardPremium class="p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
				<div class="flex items-center gap-4 mb-4">
					<svg class="h-8 w-8 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-7 7-7 7m0-7-2 0-2 2v4c0 3.9 3 3 3.9 0 7-3.9-7-3-9-3.9 7 7-7 7 3.9 7 7 0 7-7 2h-2v7.5c0-2.5-5.5 0-5.5 5.5 5.5 0 7-5.5 5.5 5.5 7.5V18.5A2.5 2.5 0 0 0-5-2.5 2.5 0-7-5.5 5.5-5.5 7.5V18.5A2.5 2.5 0 0 0-5-2.5 5.5 0-7-5.5 5.5-5.5 7.5V18.5z"></path></svg>
					<h3 class="text-xl font-bold text-foreground">Location</h3>
				</div>
				<p class="text-base text-muted-foreground mb-4">Visit for a cup of tea and conversation.</p>
				<div class="space-y-1">
					<p class="text-lg font-medium text-foreground">Franceville</p>
					<p class="text-lg font-medium text-foreground">Sidi Bou Said</p>
					<p class="text-lg font-medium text-muted-foreground">Tunis, Tunisia</p>
				</div>
			</CardPremium>
		</div>
	</div>
</section>

<section class="py-32 bg-muted/50">
	<div class="container mx-auto px-4 md:px-6">
		<div class="max-w-4xl mx-auto">
			<blockquote class="border-l-4 border-earth-primary pl-6 py-12 bg-background rounded-r-lg shadow-lg">
				<h2 class="text-3xl font-bold mb-6 text-foreground">Ready to create transformation?</h2>
				<p class="text-2xl font-medium text-muted-foreground italic leading-relaxed mb-8">
					"Never underestimate power of a small group of committed people to change world. In fact, it is the only thing that ever has." ~ Margaret Mead.
				</p>
				<div class="text-center mt-8">
					<Button variant="default" size="lg" asChild>
						<a href="https://calendly.com/fatma-ghedira/30min">Book a Discovery Call</a>
					</Button>
				</div>
			</blockquote>
		</div>

		<div class="mt-16 text-center max-w-3xl mx-auto">
			<h3 class="text-2xl font-bold mb-6 text-foreground">Book Your Session</h3>
			<p class="text-lg text-muted-foreground mb-8">
				Ready to begin your transformation journey? Let's start with a conversation to explore how we can work together.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<Button variant="default" size="lg">Book 30-min Call</Button>
				<Button variant="outline" size="lg" asChild>
					<a href="/offerings">Explore Offerings</a>
				</Button>
			</div>
		</div>
	</div>
</section>

<section class="py-32 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-8 text-foreground">Schedule Your Discovery Call</h2>

			<div class="bg-muted/50 p-8 rounded-lg border border-muted">
				<iframe
					src="https://calendly.com/fatma-ghedira/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
					width="100%"
					height="700"
					frameborder="0"
					class="rounded-lg shadow-lg"
					title="Book a 30-minute discovery call with Fatma"
				></iframe>
			</div>

			<div class="mt-8 text-center">
				<p class="text-base text-muted-foreground mb-4">
					If you prefer another time slot or have questions before booking, feel free to reach out directly.
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a
						href="mailto:fatma@cooncircles.com"
						class="text-lg font-medium text-earth-primary hover:underline transition-colors"
					>
						Send an Email
					</a>
					<a
						href="https://wa.me/21629838329"
						target="_blank"
						rel="noopener"
						class="text-lg font-medium text-earth-primary hover:underline transition-colors"
					>
						Message on WhatsApp
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
