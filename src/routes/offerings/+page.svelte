<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardPremium } from '$lib/components/ui/card';
	import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';
	import { Accordion, AccordionItem } from '$lib/components/ui/accordion';
</script>

<svelte:head>
	<title>Offerings - Coon</title>
	<meta name="description" content="Ways we can work together through leadership coaching, team retreats, experience design, workshops, and community facilitation." />
</svelte:head>

<section class="relative py-32 bg-gradient-to-b from-earth-primary/10 to-background">
	<div class="container mx-auto px-4 md:px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h1 class="text-4xl md:text-5xl font-bold mb-6 text-foreground">Let's build together</h1>
				<p class="text-lg text-muted-foreground mb-8 leading-relaxed">
					I work with people who are building something meaningful and want to take responsibility for how they build it.
				</p>
				<div class="flex flex-wrap gap-4">
					<Button variant="default" size="lg">Book time with me</Button>
					<Button variant="outline" size="lg">See Offerings</Button>
				</div>
			</div>
			<div class="relative hidden lg:block">
				<img src="/hero-workshop.jpg" alt="Team gathering" class="rounded-lg shadow-2xl w-full object-cover" />
			</div>
		</div>
	</div>
</section>

<section class="py-32 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">How we build matters as much as what we build.</h2>
		<p class="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
			I believe leadership is not a title or a position of power over others. Leadership is responsibility we take for how power, care, and influence move through us in our relationships, our work, and
			systems we shape. What I see missing in our time is not ambition or intelligence, but
			<span class="font-semibold text-earth-primary">ethical leadership</span>: leadership rooted in integrity, relational clarity, courage, and service to whole. When leadership becomes disconnected from ethics, it turns
			<span class="italic text-fire">extractive</span> of people, time, land, and future.
		</p>
	</div>
</section>

<section class="py-32 bg-muted/30">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Ways We Can Work Together</h2>
		<p class="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
			Each collaboration is unique, but here are some of the containers I hold and co-create. Every space I hold is trauma-informed, human-centered, and designed to bring what's unspoken to surface.
		</p>

		<div class="space-y-16">
			<!-- NEW: AI Transformation & Change Management -->
			<AnimateOnScroll delay={0}>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					<div>
						<img src="/service-ai-transformation.jpg" alt="AI Transformation" class="w-full h-64 object-cover rounded-lg mb-6" />
						<div>
							<p class="text-sm text-water font-semibold mb-2 uppercase tracking-wider">For Organizations</p>
							<h3 class="text-2xl font-bold mb-4 text-foreground">AI Transformation & Responsible Technology Integration</h3>
							<p class="text-base text-muted-foreground mb-6">AI implementation is not a technical challenge—it's a cultural one. Organizations rushing to integrate AI without addressing the ethical, relational, and emotional dimensions create resistance, misalignment, and systems that serve efficiency over people. Responsible AI transformation requires more than governance frameworks. It requires leaders who can hold the tension between innovation and integrity, and teams who understand how technology reshapes power, decision-making, and human dignity in their work.</p>
							<p class="text-base text-muted-foreground mb-6">I partner with organizations to build human-centered AI adoption strategies that address ethics, governance, stakeholder trust, and the cultural shifts required when machines enter decision-making processes. This includes surfacing fears about displacement, clarifying where human judgment remains essential, and creating transparent communication about how AI will change roles, relationships, and organizational values. The work is part strategy, part facilitation, part ethical reckoning.</p>
							<p class="text-base text-muted-foreground font-semibold mb-6">The result: AI integration that your people trust, that aligns with your stated values, and that positions your organization as a leader in responsible innovation. Because technology without ethical leadership doesn't just risk reputation—it risks becoming extractive of the very people it's meant to serve.</p>
							<Button variant="default" size="default" asChild>
								<a href="https://calendly.com/fatma-ghedira/30min">Book a discovery call</a>
							</Button>
						</div>
					</div>

					<div>
						<img src="/service-change-management.jpg" alt="Change Management" class="w-full h-64 object-cover rounded-lg mb-6" />
						<div>
							<p class="text-sm text-fire font-semibold mb-2 uppercase tracking-wider">For Organizations</p>
							<h3 class="text-2xl font-bold mb-4 text-foreground">Change Management & Organizational Transformation</h3>
							<p class="text-base text-muted-foreground mb-6">Restructures, mergers, and cultural shifts don't fail because of strategy—they fail because organizations underestimate the human complexity of change. When transformation touches 150 people across four cities, you can't afford to treat it as a communications exercise. It requires readiness assessment, stakeholder alignment, and the emotional intelligence to navigate resistance, grief, and power dynamics that surface when systems reorganize.</p>
							<p class="text-base text-muted-foreground mb-6">I work with leadership teams to design change processes that integrate organizational psychology, systems thinking, and somatic awareness. This means identifying not just what needs to change, but how your people will experience that change—and building the communication strategies, transition support, and leadership capacity to meet them there. The goal isn't compliance; it's sustainable transformation where people understand the why, have space to process the what, and are equipped for the how.</p>
							<p class="text-base text-muted-foreground font-semibold mb-6">The outcome: faster adoption, lower attrition, and a culture that can navigate future change with resilience rather than exhaustion. Because transformation that ignores the human system creates compliance at best—and at worst, organizational trauma that echoes for years.</p>
							<Button variant="default" size="default" asChild>
								<a href="https://calendly.com/fatma-ghedira/30min">Book a discovery call</a>
							</Button>
						</div>
					</div>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll delay={0.1}>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					<div>
						<img src="/service-coaching.jpg" alt="1:1 coaching" class="w-full h-64 object-cover rounded-lg mb-6" />
						<div>
							<p class="text-sm text-water font-semibold mb-2 uppercase tracking-wider">For FOUNDERS & EXECUTIVES & Creators</p>
							<h3 class="text-2xl font-bold mb-4 text-foreground">1:1 Leadership Coaching</h3>
							<p class="text-base text-muted-foreground mb-6">For individuals navigating responsibility, transition, or emergence.</p>
							<ul class="space-y-2 mb-6 text-muted-foreground">
								<li>• Clarify what you are building and why</li>
								<li>• Align your goals with your values and capacity</li>
								<li>• Strengthen relational intelligence and boundary-setting</li>
								<li>• Navigate power, conflict, and decision-making with integrity</li>
								<li>• Develop leadership capacity required to sustain what you are creating</li>
							</ul>
							<Button variant="default" size="default" asChild>
								<a href="https://calendly.com/fatma-ghedira/30min">Book time with me</a>
							</Button>
						</div>
					</div>

					<div>
						<img src="/service-paired.jpg" alt="Paired coaching" class="w-full h-64 object-cover rounded-lg mb-6" />
						<div>
							<p class="text-sm text-water font-semibold mb-2 uppercase tracking-wider">for COMPANIES & TEAMS</p>
							<h3 class="text-2xl font-bold mb-4 text-foreground">Paired or Small Group Coaching</h3>
							<p class="text-base text-muted-foreground mb-6">For two or more people building together — co-founders, partners, collaborators, friends, or project leads.</p>
							<ul class="space-y-2 mb-6 text-muted-foreground">
								<li>• Shared vision and role clarity</li>
								<li>• Relational dynamics and trust</li>
								<li>• Communication, boundaries, and accountability</li>
								<li>• Ethical use of power within group</li>
							</ul>
							<Button variant="default" size="default" asChild>
								<a href="https://calendly.com/fatma-ghedira/30min">Book time with me</a>
							</Button>
						</div>
					</div>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll delay={0.2}>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					<div>
						<img src="/service-experience.jpg" alt="Experience design" class="w-full h-64 object-cover rounded-lg mb-6" />
						<div>
							<p class="text-sm text-fire font-semibold mb-2 uppercase tracking-wider">for COMPANIES & COMMUNITIES</p>
							<h3 class="text-2xl font-bold mb-4 text-foreground">Experience Design Consulting</h3>
							<p class="text-base text-muted-foreground mb-6">This is different from ceremony—it's about architecting entire arc of an experience. Whether you're hosting a retreat, conference, a creative residency, team gathering, I help you:</p>
							<ul class="space-y-2 mb-6 text-muted-foreground">
								<li>• Clarify your "why" and intention</li>
								<li>• Design for emotional and energetic flow</li>
								<li>• Ensure coherence between purpose, structure, and soul</li>
								<li>• Support you in creating an ecosystem for this activity to thrive</li>
							</ul>
							<p class="text-sm italic text-muted-foreground mb-6">This is about creating experiences that leave a deep imprint—not just a nice moment.</p>
							<Button variant="default" size="default" asChild>
								<a href="https://calendly.com/fatma-ghedira/30min">Book a discovery call</a>
							</Button>
						</div>
					</div>

					<div>
						<img src="/service-teambuilding.jpg" alt="Team building" class="w-full h-64 object-cover rounded-lg mb-6" />
						<div>
							<p class="text-sm text-spirit font-semibold mb-2 uppercase tracking-wider">For TEAMS & COMMUNITIES</p>
							<h3 class="text-2xl font-bold mb-4 text-foreground">Team Building & Retreats</h3>
							<p class="text-base text-muted-foreground mb-6">I create brave containers where teams, groups, or communities can:</p>
							<ul class="space-y-2 mb-6 text-muted-foreground">
								<li>• Process unresolved group tension</li>
								<li>• Reconnect to shared purpose</li>
								<li>• Navigate emotionally charged conversations</li>
								<li>• Improve group dynamics through relational and systemic awareness</li>
								<li>• Create systems and processes around shared goals</li>
							</ul>
							<Button variant="default" size="default" asChild>
								<a href="https://calendly.com/fatma-ghedira/30min">Book time with me</a>
							</Button>
						</div>
					</div>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll delay={0.3}>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					<div>
						<img src="/service-speaking.jpg" alt="Speaking" class="w-full h-64 object-cover rounded-lg mb-6" />
						<div>
							<p class="text-sm text-air font-semibold mb-2 uppercase tracking-wider">for corporate events</p>
							<h3 class="text-2xl font-bold mb-4 text-foreground">Speaking & Workshops</h3>
							<p class="text-base text-muted-foreground mb-6">Keynotes, panels, or fireside dialogues that open hearts and stir minds. Themes include:</p>
							<ul class="space-y-2 mb-6 text-muted-foreground">
								<li>• Emotional safety & leadership</li>
								<li>• The power of ritual in modern life</li>
								<li>• Inner & outer liberation</li>
								<li>• Healing through community</li>
								<li>• The future of conscious collaboration</li>
							</ul>
							<Button variant="default" size="default" asChild>
								<a href="https://calendly.com/fatma-ghedira/30min">Book time with me</a>
							</Button>
						</div>
					</div>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>

<section class="py-32 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<div class="max-w-4xl mx-auto">
			<blockquote class="border-l-4 border-earth-primary pl-6 py-8 my-12 bg-muted/30 rounded-r-lg">
				<p class="text-lg italic text-muted-foreground leading-relaxed">
					"In the midst of all the world's chaos, this retreat felt like a much-needed oasis. The sound bathing was music to the soul—the transition from tribal chants to soothing bowls was a masterpiece. I
					experienced moments of pure, magnificent bliss. Thank you for guiding me deeper into self-discovery, universal alignment, and a sense of profound community."
				</p>
				<p class="text-sm font-semibold text-foreground mt-4">— Participant, Awaken Your Inner Sea Retreat</p>
			</blockquote>
		</div>
	</div>
</section>

<section class="py-32 bg-earth-primary/5">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">The Framework That Grounds My Work</h2>
		<p class="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
			At heart of my work is understanding that <span class="font-semibold text-earth-primary">our leadership capacity grows as we grow as human beings</span> because we are the same person everywhere. My work is grounded in five relational capacities that support ethical
			leadership and sustainable building:
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
			<AnimateOnScroll delay={0}>
				<div class="bg-white/80 border border-muted rounded-xl p-8 border-l-4 border-l-earth-primary">
					<h3 class="text-lg font-bold text-earth-primary mb-3">Relationship to Self</h3>
					<p class="text-sm text-muted-foreground">Listening inwardly, regulating nervous system, acting without self-betrayal</p>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll delay={0.1}>
				<div class="bg-white/80 border border-muted rounded-xl p-8 border-l-4 border-l-water">
					<h3 class="text-lg font-bold text-water mb-3">Relationship to Others</h3>
					<p class="text-sm text-muted-foreground">Trust, honest communication, repair, and boundaries</p>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll delay={0.2}>
				<div class="bg-white/80 border border-muted rounded-xl p-8 border-l-4 border-l-air">
					<h3 class="text-lg font-bold text-air mb-3">Relationship to Power & Systems</h3>
					<p class="text-sm text-muted-foreground">Using influence responsibly, without domination or avoidance</p>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll delay={0.3}>
				<div class="bg-white/80 border border-muted rounded-xl p-8 border-l-4 border-l-fire">
					<h3 class="text-lg font-bold text-fire mb-3">Relationship to Meaning</h3>
					<p class="text-sm text-muted-foreground">Values, faith, and purpose beyond ego or status</p>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll delay={0.4}>
				<div class="bg-white/80 border border-muted rounded-xl p-8 border-l-4 border-l-spirit">
					<h3 class="text-lg font-bold text-spirit mb-3">Relationship to Time</h3>
					<p class="text-sm text-muted-foreground">Patience, discernment, restraint, and protecting what is still emerging</p>
				</div>
			</AnimateOnScroll>
		</div>

		<div class="mt-16 text-center">
			<Button variant="default" size="lg" asChild>
				<a href="https://calendly.com/fatma-ghedira/30min">Book a discovery call now</a>
			</Button>
		</div>
	</div>
</section>

<section class="py-32 bg-background">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">You Might Be Here If You Are …</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			<div class="flex gap-4 items-start">
				<svg class="h-8 w-8 text-earth-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2l-10 7 7-7 7"></path></svg>
				<p class="text-base text-muted-foreground">Carrying a long-term vision for something more just, humane, or regenerative and feeling alone in early stages</p>
			</div>

			<div class="flex gap-4 items-start">
				<svg class="h-8 w-8 text-earth-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2l-10 7 7-7 7"></path></svg>
				<p class="text-base text-muted-foreground">Tired of holding responsibility alone, without spaces where you can think, feel, and be honest</p>
			</div>

			<div class="flex gap-4 items-start">
				<svg class="h-8 w-8 text-earth-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2l-10 7 7-7 7"></path></svg>
				<p class="text-base text-muted-foreground">Technically strong and increasingly visible, yet sensing that people aren't truly rallying around you</p>
			</div>

			<div class="flex gap-4 items-start">
				<svg class="h-8 w-8 text-earth-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2l-10 7 7-7 7"></path></svg>
				<p class="text-base text-muted-foreground">Building fast because slowing down feels risky, even as relationships fray or people quietly disengage</p>
			</div>

			<div class="flex gap-4 items-start">
				<svg class="h-8 w-8 text-earth-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2l-10 7 7-7 7"></path></svg>
				<p class="text-base text-muted-foreground">Succeeding on paper, while feeling a growing gap between your values and your day-to-day decisions</p>
			</div>

			<div class="flex gap-4 items-start">
				<svg class="h-8 w-8 text-earth-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2l-10 7 7-7 7"></path></svg>
				<p class="text-base text-muted-foreground">Committed to care, justice, or impact, yet noticing how urgency, pressure, or unexamined patterns are recreating the very harm you want to move away from</p>
			</div>

			<div class="flex gap-4 items-start">
				<svg class="h-8 w-8 text-earth-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2l-10 7 7-7 7"></path></svg>
				<p class="text-base text-muted-foreground">Committed to care, justice, or impact, yet noticing how urgency, pressure, or unexamined patterns are recreating the very harm you want to move away from</p>
			</div>
		</div>

		<div class="flex justify-center mt-12">
			<Button variant="default" size="lg">Book a discovery call</Button>
		</div>
	</div>
</section>

<section class="py-32 bg-muted/30">
	<div class="container mx-auto px-4 md:px-6">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">How Process Works</h2>
		<p class="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">I work relationally not transactionally. Which means we don't rush. We listen.</p>

		<div class="max-w-4xl mx-auto">
			<Accordion>
				<AccordionItem title="Who do you typically work with?" value="item-1">
					<p class="text-lg text-muted-foreground">I collaborate with a wide range of groups—community leaders, executive teams, intentional communities, and social entrepreneurs. My approach is always tailored to unique needs and culture of each group, ensuring every gathering feels meaningful and inclusive.</p>
				</AccordionItem>

				<AccordionItem title="What types of gatherings do you facilitate?" value="item-2">
					<p class="text-lg text-muted-foreground mb-6">I design and guide team retreats, community listening sessions, conflict transformation circles, visioning workshops, and onboarding experiences for teams and communities that are starting. Each experience is crafted to foster connection, clarity, and a sense of belonging.</p>
					<div class="bg-muted/50 p-6 rounded-lg border-l-4 border-earth-primary">
						<p class="font-semibold mb-4 text-foreground">Process Flow:</p>
						<ul class="space-y-2 text-muted-foreground">
							<li>• Connection & Alchemy Call (30 min): We feel into resonance.</li>
							<li>• Clarity Session (1 hr): We name deeper why of this work together.</li>
							<li>• Proposal & Scope: I reflect a clear rhythm, timeline, and energetic exchange.</li>
							<li>• Launch: If it's aligned, we begin.</li>
						</ul>
					</div>
				</AccordionItem>

				<AccordionItem title="How do you customize each experience?" value="item-3">
					<p class="text-lg text-muted-foreground">Every individual and group is different, so I start by listening deeply to your goals and challenges. Together, we co-create a process that honors your story, values, and aspirations—drawing from ancient wisdom, modern science, and nature-inspired practices.</p>
				</AccordionItem>

				<AccordionItem title="Where do your workshops and retreats take place?" value="item-4">
					<p class="text-lg text-muted-foreground">Most gatherings hosted in Tunisia. I am open to travel to location you choose or to virtually. Whether it's a serene retreat center, a vibrant community space, or an online setting, I'll help you find the right environment for your group.</p>
				</AccordionItem>

				<AccordionItem title="How do we get started?" value="item-5">
					<p class="text-lg text-muted-foreground">Simply reach out to schedule a conversation. We'll discuss your needs, explore possibilities, and see if we're a good fit. I'm here to answer any questions and help you design a gathering that truly matters.</p>
				</AccordionItem>

				<AccordionItem title="What outcomes can we expect?" value="item-6">
					<p class="text-lg text-muted-foreground">You can expect greater clarity, stronger relationships, and renewed alignment, increased trust and a feeling of connection within your team or community. My goal is to create space for honest dialogue, and actionable next steps that support your ongoing growth.</p>
				</AccordionItem>
			</Accordion>
		</div>
	</div>
</section>
