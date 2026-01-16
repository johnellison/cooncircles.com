<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
</script>

<svelte:head>
	<title>Coon - Ethical Leadership & Transformation</title>
	<meta name="description" content="I create safe spaces for brave leaders to grow. Coach, facilitator, and spaceholder weaving together psychology, somatic healing, and leadership practices." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div class="relative order-2 lg:order-1">
				<img src="/hero-fatma.webp" alt="Fatma with drum" class="rounded-lg w-full object-cover" />
			</div>
			<div class="order-1 lg:order-2">
				<h1 class="text-4xl md:text-5xl font-bold mb-4 text-foreground">I create safe spaces for brave leaders to grow.</h1>
				<p class="text-lg text-muted-foreground mb-2">Salām! (سَلَامٌ)</p>
				<p class="text-lg text-foreground mb-8 leading-relaxed">
					I am Fatma. I'm a coach, facilitator, and spaceholder who weaves together psychology, somatic healing, and leadership practices. My work centers on creating <em>cocoons of safety</em> for individuals, leaders, and communities where transformation can unfold.
				</p>

				<!-- Service Tags -->
				<div class="flex flex-wrap gap-x-6 gap-y-3 mb-8">
					<div class="flex items-center gap-2">
						<svg class="h-5 w-5 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
						</svg>
						<span class="text-sm text-foreground">Team retreats & offsites</span>
					</div>
					<div class="flex items-center gap-2">
						<svg class="h-5 w-5 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
						</svg>
						<span class="text-sm text-foreground">Community rituals</span>
					</div>
					<div class="flex items-center gap-2">
						<svg class="h-5 w-5 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
						</svg>
						<span class="text-sm text-foreground">Conflict transformation</span>
					</div>
					<div class="flex items-center gap-2">
						<svg class="h-5 w-5 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
						</svg>
						<span class="text-sm text-foreground">Leadership training</span>
					</div>
				</div>

				<div class="flex flex-wrap gap-4">
					<Button variant="default" size="lg" asChild>
						<a href="https://calendly.com/fatma-ghedira/30min">Book a call</a>
					</Button>
					<Button variant="outline" size="lg" asChild>
						<a href="/offerings">See offerings</a>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Client Logos -->
<section class="py-12 bg-card">
	<div class="container mx-auto px-4 md:px-6">
		<p class="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">Trusted by organizations</p>
		<div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
			<img src="/logos/google.webp" alt="Google" class="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all" />
			<img src="/logos/ooredoo.png" alt="Ooredoo" class="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all" />
			<img src="/logos/snapchat.svg" alt="Snapchat" class="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all" />
			<img src="/logos/think-human.png" alt="Think Human" class="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all" />
			<img src="/logos/global-shapers.svg" alt="WEF Global Shapers" class="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all" />
		</div>
	</div>
</section>

<!-- Who I Work With -->
<section class="py-20 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Who I Work With?</h2>
		<p class="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
			Whether I'm guiding an entrepreneur through a 3-month journey of personal leadership, or designing a retreat for a corporate leadership team, my approach is always the same: <span class="font-semibold text-earth-primary">safety first, truth-telling, and the art of connection.</span>
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			<!-- Card 1: Community Leaders -->
			<Card class="overflow-hidden flex flex-col">
				<CardContent class="pt-6 pb-4 flex-grow">
					<h3 class="text-lg font-bold mb-3 text-foreground">Community Leaders & Faith Gatherings</h3>
					<p class="text-sm text-muted-foreground leading-relaxed">Supporting local leaders — from social justice activists to faith leaders — in creating gatherings that unify, listen deeply, and restore harmony to the collective field.</p>
				</CardContent>
				<div class="relative h-56">
					<img src="/who-work-with-1.webp" alt="Community Leaders" class="w-full h-full object-cover" />
				</div>
			</Card>

			<!-- Card 2: HR Leaders -->
			<Card class="overflow-hidden flex flex-col">
				<CardContent class="pt-6 pb-4 flex-grow">
					<h3 class="text-lg font-bold mb-3 text-foreground">HR Leaders & Executive Teams</h3>
					<p class="text-sm text-muted-foreground leading-relaxed">Designing retreats and offsites where teams can move beyond burnout and performance — into trust, cohesion, and renewed vision.</p>
				</CardContent>
				<div class="relative h-56">
					<img src="/who-work-with-2.webp" alt="HR Leaders" class="w-full h-full object-cover" />
				</div>
			</Card>

			<!-- Card 3: Intentional Communities -->
			<Card class="overflow-hidden flex flex-col">
				<CardContent class="pt-6 pb-4 flex-grow">
					<h3 class="text-lg font-bold mb-3 text-foreground">Intentional Communities & Eco-Villages</h3>
					<p class="text-sm text-muted-foreground leading-relaxed">Facilitating processes that surface what is unsaid, support collective integration, and restore the relational soil needed for thriving, long-term co-living.</p>
				</CardContent>
				<div class="relative h-56">
					<img src="/who-work-with-3.webp" alt="Intentional Communities" class="w-full h-full object-cover" />
				</div>
			</Card>

			<!-- Card 4: Social Entrepreneurs -->
			<Card class="overflow-hidden flex flex-col">
				<CardContent class="pt-6 pb-4 flex-grow">
					<h3 class="text-lg font-bold mb-3 text-foreground">Social Entrepreneurs & Family Businesses</h3>
					<p class="text-sm text-muted-foreground leading-relaxed">Holding space for clarity, renewal, and emotional resilience within purpose-driven missions and regenerative organizations.</p>
				</CardContent>
				<div class="relative h-56">
					<img src="/who-work-with-4.webp" alt="Social Entrepreneurs" class="w-full h-full object-cover" />
				</div>
			</Card>
		</div>

		<div class="flex justify-center gap-4 mt-12">
			<Button variant="default" size="lg" asChild>
				<a href="https://calendly.com/fatma-ghedira/30min">Book a discovery call</a>
			</Button>
			<Button variant="outline" size="lg" asChild>
				<a href="/offerings">See offerings</a>
			</Button>
		</div>
	</div>
</section>

<!-- Why Leaders Are Being Called -->
<section class="py-20 bg-card">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Leaders Are Being Called to Go Deeper Now</h2>
		<p class="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
			We live in a time of rupture: ecological, social, spiritual. Surface-level solutions are not enough. Leaders must be willing to enter the deeper layers — to examine their own wounds, blind spots, and conditioning.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<Card>
				<CardHeader>
					<h3 class="text-lg font-bold text-earth-primary">Cultivate inner safety</h3>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">Building the internal foundation that allows for presence and clarity</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<h3 class="text-lg font-bold text-fire">Confront shadow and bias</h3>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">Looking honestly at what we've been avoiding or denying</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<h3 class="text-lg font-bold text-water">Transform relationships</h3>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">Moving from transactional to truly relational leadership</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<h3 class="text-lg font-bold text-air">Design safe and brave spaces</h3>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">Creating containers where truth can be spoken and heard</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<h3 class="text-lg font-bold text-spirit">Integrate healing and leadership</h3>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">Understanding that how we lead is inseparable from who we are</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<h3 class="text-lg font-bold text-earth-extra">Model regenerative leadership</h3>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">Leading in ways that restore rather than deplete</p>
				</CardContent>
			</Card>
		</div>

		<div class="flex justify-center gap-4 mt-12">
			<Button variant="default" size="lg" asChild>
				<a href="https://calendly.com/fatma-ghedira/30min">Book a discovery call</a>
			</Button>
			<Button variant="outline" size="lg" asChild>
				<a href="/offerings">See my offerings</a>
			</Button>
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="py-20 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Stories of Transformation</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<Card class="p-6">
				<div class="flex items-center gap-4 mb-4">
					<img src="/testimonials/hayfa-sdiri.webp" alt="Hayfa Sdiri" class="w-16 h-16 rounded-full object-cover" />
					<div>
						<p class="font-semibold text-foreground">Hayfa Sdiri</p>
						<p class="text-sm text-muted-foreground">Chief Impact Officer, Rivet</p>
					</div>
				</div>
				<CardContent class="p-0">
					<p class="text-muted-foreground italic">
						"Fatma has the gift of curating spaces that feel like home. She guides you back to yourself, with glimpses of who you're meant to be. I've had the ultimate pleasure of witnessing her work this magic in one-on-one and group settings, virtually and in real life."
					</p>
				</CardContent>
			</Card>

			<Card class="p-6">
				<div class="flex items-center gap-4 mb-4">
					<img src="/testimonials/soumeya.jpeg" alt="Soumeya Rachedi" class="w-16 h-16 rounded-full object-cover" />
					<div>
						<p class="font-semibold text-foreground">Soumeya Rachedi</p>
						<p class="text-sm text-muted-foreground">CEO, NXT Evolution</p>
					</div>
				</div>
				<CardContent class="p-0">
					<p class="text-muted-foreground italic">
						"Working with Fatma is honestly incredible. She brings so much to the table—depth of knowledge, sharp insight, creative thinking, and a kind of intuitive leadership that's rare to find. Her facilitation skills are out of this world."
					</p>
				</CardContent>
			</Card>

			<Card class="p-6">
				<div class="flex items-center gap-4 mb-4">
					<img src="/testimonials/meredith-haberfeld.webp" alt="Meredith Haberfeld" class="w-16 h-16 rounded-full object-cover" />
					<div>
						<p class="font-semibold text-foreground">Meredith Haberfeld</p>
						<p class="text-sm text-muted-foreground">Founder CEO, Think Human</p>
					</div>
				</div>
				<CardContent class="p-0">
					<p class="text-muted-foreground italic">
						"Fatma has given so much to ThinkHuman over these past 7 years—with integrity, wisdom, and a heart that sees the sacred in every moment. She builds deep relationships and brings fierce creativity and devotion to everything she touches."
					</p>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<!-- Services Preview -->
<section class="py-20 bg-card">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">My Services</h2>
		<p class="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
			Each collaboration is unique, but here are some of the containers I hold and co-create.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<Card class="overflow-hidden">
				<div class="relative h-48">
					<img src="/service-speaking.jpg" alt="Workshops" class="w-full h-full object-cover" />
				</div>
				<CardContent class="pt-6">
					<h3 class="text-xl font-bold mb-2 text-foreground">Workshops & Training</h3>
					<p class="text-muted-foreground text-sm">Interactive workshops and individual leadership coaching and group training designed to inspire growth, foster collaboration, and ignite collective action.</p>
				</CardContent>
			</Card>

			<Card class="overflow-hidden">
				<div class="relative h-48">
					<img src="/service-teambuilding.jpg" alt="Retreats" class="w-full h-full object-cover" />
				</div>
				<CardContent class="pt-6">
					<h3 class="text-xl font-bold mb-2 text-foreground">Leadership Retreats + Offsites</h3>
					<p class="text-muted-foreground text-sm">Custom-designed retreats and offsites to help your team reconnect, reflect, and realign with purpose in inspiring settings.</p>
				</CardContent>
			</Card>

			<Card class="overflow-hidden">
				<div class="relative h-48">
					<img src="/service-coaching.jpg" alt="Conflict" class="w-full h-full object-cover" />
				</div>
				<CardContent class="pt-6">
					<h3 class="text-xl font-bold mb-2 text-foreground">Conflict Transformation</h3>
					<p class="text-muted-foreground text-sm">Compassionate facilitation for navigating conflict, restoring harmony, and building stronger, more resilient communities and organizations.</p>
				</CardContent>
			</Card>

			<Card class="overflow-hidden">
				<div class="relative h-48">
					<img src="/service-paired.jpg" alt="Rituals" class="w-full h-full object-cover" />
				</div>
				<CardContent class="pt-6">
					<h3 class="text-xl font-bold mb-2 text-foreground">Community & Team Rituals</h3>
					<p class="text-muted-foreground text-sm">Guided community & team listening and rituals that foster understanding, trust, and a sense of belonging for all group members.</p>
				</CardContent>
			</Card>

			<Card class="overflow-hidden">
				<div class="relative h-48">
					<img src="/service-experience.jpg" alt="Sprouts" class="w-full h-full object-cover" />
				</div>
				<CardContent class="pt-6">
					<h3 class="text-xl font-bold mb-2 text-foreground">Community & Team Sprouts</h3>
					<p class="text-muted-foreground text-sm">Thoughtful onboarding and welcoming new members with intention, planting seeds of trust and purpose so the project or community can root and come alive together.</p>
				</CardContent>
			</Card>

			<Card class="overflow-hidden">
				<div class="relative h-48">
					<img src="/hero-workshop.jpg" alt="Circles" class="w-full h-full object-cover" />
				</div>
				<CardContent class="pt-6">
					<h3 class="text-xl font-bold mb-2 text-foreground">Circles of Transformation</h3>
					<p class="text-muted-foreground text-sm">Co-created retreats and journeys designed with trusted partners and open for individuals to self-register and step into their growth and transformation.</p>
				</CardContent>
			</Card>
		</div>

		<div class="flex justify-center mt-12">
			<Button variant="default" size="lg" asChild>
				<a href="/offerings">See all offerings</a>
			</Button>
		</div>
	</div>
</section>

<!-- Lead Beyond The Mind -->
<section class="py-20 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<p class="text-sm text-earth-primary font-semibold mb-4 uppercase tracking-wider">Connect. Convene. Create.</p>
				<h2 class="text-3xl md:text-4xl font-bold mb-6 text-foreground">Lead Beyond The Mind</h2>
				<p class="text-lg text-muted-foreground mb-8 leading-relaxed">
					Alongside group and individual coaching, I weave in somatic practices using sound, movement and water practices to ensure growth is felt, embodied and sustainable—not only understood.
				</p>
				<Button variant="default" size="lg" asChild>
					<a href="https://calendly.com/fatma-ghedira/30min">Book a Discovery Call</a>
				</Button>
			</div>
			<div class="relative hidden lg:block">
				<img src="/fatma-sound-healing.webp" alt="Fatma sound healing" class="rounded-lg shadow-2xl w-full object-cover" />
			</div>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="py-20 bg-card">
	<div class="container mx-auto px-4 md:px-6">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-4 text-foreground">Reach out - Let's connect and collaborate</h2>
			<p class="text-lg text-muted-foreground mb-8">Curious about working together? I'd love to hear from you.</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				<div class="text-center">
					<svg class="h-8 w-8 mx-auto mb-4 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
					<p class="font-semibold text-foreground mb-1">Email</p>
					<p class="text-sm text-muted-foreground">fatma.ghedira@gmail.com</p>
				</div>

				<div class="text-center">
					<svg class="h-8 w-8 mx-auto mb-4 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
					</svg>
					<p class="font-semibold text-foreground mb-1">WhatsApp</p>
					<p class="text-sm text-muted-foreground">+216 29 83 83 29</p>
				</div>

				<div class="text-center">
					<svg class="h-8 w-8 mx-auto mb-4 text-earth-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg>
					<p class="font-semibold text-foreground mb-1">Location</p>
					<p class="text-sm text-muted-foreground">Franceville, Tunis, Tunisia</p>
				</div>
			</div>

			<Button variant="default" size="lg" asChild>
				<a href="https://calendly.com/fatma-ghedira/30min">Book a discovery call</a>
			</Button>
		</div>
	</div>
</section>
