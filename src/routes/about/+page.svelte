<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import ScrollStory from '$lib/components/ScrollStory.svelte';
</script>

<svelte:head>
	<title>About - Coon</title>
	<meta name="description" content="Fatma Ghedira - Psychologist, community catalyst, and facilitator. Creating safe spaces for transformation and relatonal healing." />
</svelte:head>

<section class="relative py-32 bg-gradient-to-b from-earth-primary/10 to-background">
	<div class="container mx-auto px-4 md:px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<p class="text-lg text-muted-foreground mb-8 leading-relaxed">
					I'm a psychologist by education, community catalyst by experience and a facilitator at heart.
				</p>
				<p class="text-lg font-medium text-foreground mb-6 leading-relaxed">
					I believe our systems—bodies, families, lands begin to heal the moment we stop avoiding what hurts and start listening to what's been waiting to be felt.
				</p>
				<p class="text-lg font-medium text-muted-foreground italic mb-8 leading-relaxed">
					Transformation isn't just individual—it's ancestral. It's ecological. It's emotional. And it begins with presence.
				</p>
				<p class="text-lg font-medium text-foreground leading-relaxed">
					What's felt must be honored. What's unresolved keeps repeating.
				</p>
				<p class="text-lg font-medium text-muted-foreground italic leading-relaxed">
					And what we don't transform becomes weight our children carry.
				</p>
			</div>
			<div class="relative">
				<img src="/about-story.jpg" alt="Fatma story" class="rounded-lg shadow-2xl w-full object-cover" />
			</div>
		</div>
	</div>
</section>

<!-- Condensed Pills Section -->
<section class="py-16 bg-muted/50">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">Fatma Ghedira</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
			<Card class="border-l-4 border-earth-primary/50">
				<CardContent class="py-4 px-4 text-center">
					<p class="font-semibold text-earth-primary text-base leading-tight">m.a. Social & organizational psychology</p>
				</CardContent>
			</Card>
			<Card class="border-l-4 border-earth-primary/50">
				<CardContent class="py-4 px-4 text-center">
					<p class="font-semibold text-earth-primary text-base leading-tight">m.a., forensic psychology</p>
				</CardContent>
			</Card>
			<Card class="border-l-4 border-earth-primary/50">
				<CardContent class="py-4 px-4 text-center">
					<p class="font-semibold text-earth-primary text-base leading-tight">Leadership development</p>
				</CardContent>
			</Card>
			<Card class="border-l-4 border-earth-primary/50">
				<CardContent class="py-4 px-4 text-center">
					<p class="font-semibold text-earth-primary text-base leading-tight">Sound healing</p>
				</CardContent>
			</Card>
			<Card class="border-l-4 border-earth-primary/50">
				<CardContent class="py-4 px-4 text-center">
					<p class="font-semibold text-earth-primary text-base leading-tight">Group dynamics</p>
				</CardContent>
			</Card>
			<Card class="border-l-4 border-earth-primary/50">
				<CardContent class="py-4 px-4 text-center">
					<p class="font-semibold text-earth-primary text-base leading-tight">Mediation & conflict resolution</p>
				</CardContent>
			</Card>
			<Card class="border-l-4 border-earth-primary/50">
				<CardContent class="py-4 px-4 text-center">
					<p class="font-semibold text-earth-primary text-base leading-tight">Family Constellation</p>
				</CardContent>
			</Card>
			<Card class="border-l-4 border-earth-primary/50">
				<CardContent class="py-4 px-4 text-center">
					<p class="font-semibold text-earth-primary text-base leading-tight">Water immersion</p>
				</CardContent>
			</Card>
			<Card class="border-l-4 border-earth-primary/50">
				<CardContent class="py-4 px-4 text-center">
					<p class="font-semibold text-earth-primary text-base leading-tight">Yoga</p>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<!-- Scroll-Based Narrative -->
<ScrollStory
	paragraphs={[
		"I grew up in a home where love was present, but safety was not.",
		"My parents didn't have emotional tools to feel safe within themselves, and as eldest daughter, I became the emotional translator of the house.",
		"By seven, I was scanning room for signs of danger and doing everything I could to keep things together.",
		"I became a vessel for everything unspoken. I felt everything no one else could name.",
		"And I carried that hyper-attunement into adulthood—performing, adapting, overachieving—until my body said no.",
		"My breaking point came when I moved to New York.",
		"I was working two jobs while carrying the pressure of my Master's at Columbia University; constantly doing, constantly holding, constantly performing.",
		"Until my body said 'No.'",
		"I lost the ability to use my hands. Panic attacks replaced my breath. My system collapsed.",
		"That was the beginning.",
		"This was first time I realized: healing doesn't happen in the mind.",
		"It happens when someone finally holds the parts of us that have been carrying too much, for too long."
	]}
/>

<section class="py-32 bg-earth-primary/8">
	<div class="container mx-auto px-4 md:px-6 text-center">
		<h2 class="text-4xl font-bold mb-8 text-foreground">This is the root of my work.</h2>
		<div class="max-w-4xl mx-auto space-y-6">
			<p class="text-lg text-muted-foreground leading-relaxed">
				I am here to create cocoons of safety—spaces where nervous system can soften, where truth can be spoken, and where we remember how to be human again.
			</p>
			<p class="text-lg text-foreground leading-relaxed mb-8">
				My work is as much about what is unspoken as what is actually said—what lives in the body, what lives in the bloodline, and what the land itself wants us to remember.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
			<div class="bg-white shadow-lg border-l-4 border-l-earth-primary/30 p-6 rounded-lg space-y-4">
				<p class="text-lg font-semibold text-earth-primary">Restore alignment in the field</p>
				<p class="text-base text-muted-foreground">Attune to what wants to emerge</p>
			</div>
			<div class="bg-white shadow-lg border-l-4 border-l-earth-primary/30 p-6 rounded-lg space-y-4">
				<p class="text-lg font-semibold text-earth-primary">Let love circulate again</p>
			</div>
			<div class="bg-white shadow-lg border-l-4 border-l-earth-primary/30 p-6 rounded-lg space-y-4">
				<p class="text-lg font-semibold text-earth-primary">Remember wholeness</p>
			</div>
		</div>

		<div class="mt-16">
			<Button variant="default" size="lg" asChild>
				<a href="https://calendly.com/fatma-ghedira/30min">Book a discovery call</a>
			</Button>
		</div>
	</div>
</section>

<section class="py-32 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">Our ability to gather with clarity and purpose is what makes us human.</h2>
		<p class="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
			And when we do that, the way we live changes.
		</p>
		<div class="flex justify-center">
			<Button variant="default" size="lg">Book a discovery call</Button>
		</div>
	</div>
</section>
