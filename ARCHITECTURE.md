# Coon Circles Website - Technical Architecture

## Tech Stack

### Core Framework
- **SvelteKit**: 2.49.1 - Full-stack web framework
- **Svelte**: 5.45.6 - Reactive component framework with runes
- **Vite**: 7.3.1 - Build tool and dev server
- **TypeScript**: 5.7.3 - Type-safe JavaScript

### Styling & UI
- **TailwindCSS**: 3.4.19 - Utility-first CSS framework
- **shadcn-svelte** - Component library built on Radix UI primitives
- **Custom Color Palette**:
  - Earth Primary: #675032
  - Fire: #BE5E4F
  - Water: #6DAAC9
  - Air: #C49556
  - Spirit: #765E85
  - Sage: #D5E6D3
  - Cream: #f8f2e8

### Animation
- **Native Intersection Observer API** - Scroll-triggered animations
- **CSS Transitions** - Smooth state changes (600ms cubic-bezier easing)
- **Respects prefers-reduced-motion** - Accessibility-first approach

### Typography
- **Fraunces**: Serif font for headings
- **Rubik**: Sans-serif font for body text

## Project Structure

```
/src
  /routes              # SvelteKit file-based routing
    +page.svelte       # Homepage
    /about
      +page.svelte     # About page with scroll narrative
    /contact
      +page.svelte     # Contact page
    /offerings
      +page.svelte     # Services/offerings page
    +layout.svelte     # Root layout (header, footer)

  /lib
    /components
      AnimateOnScroll.svelte    # Reusable scroll animation wrapper
      ScrollStory.svelte        # Scroll-based narrative component
      /ui
        /card               # Card component system
          card.svelte       # Base card
          card-premium.svelte  # Enhanced card variant
          card-content.svelte
          card-header.svelte
          index.ts
        /accordion          # Accordion component system
          accordion.svelte     # Wrapper with single-open logic
          accordion-item.svelte  # Individual accordion item
          index.ts
        /button
        /navigation-menu
    utils.ts            # Utility functions (cn, etc.)

  /static
    /logos              # Client logos
    /testimonials       # Testimonial images
    /*.jpg, /*.webp     # Hero and service images
```

## Component Patterns

### Svelte 5 Runes
All components use Svelte 5's new reactive primitives:

- `$props()` - Component props with TypeScript types
- `$state()` - Reactive state
- `$derived()` - Computed values
- `$effect()` - Side effects
- `$bindable()` - Two-way binding

Example:
```svelte
<script lang="ts">
  let { title, value, children }: {
    title: string;
    value: string;
    children?: Snippet;
  } = $props();

  let isOpen = $state(false);
  const displayTitle = $derived(title.toUpperCase());
</script>
```

### Compound Components
Components follow the shadcn pattern of compound components:

```svelte
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Utility-First CSS
Uses Tailwind with the `cn()` utility for className merging:

```svelte
<script>
  import { cn } from '$lib/utils';
</script>

<div class={cn('base-classes', className, conditionalClass && 'extra')}>
```

## Animation System

### AnimateOnScroll Component
Wraps content to trigger animations when scrolling into view:

```svelte
<AnimateOnScroll delay={0.2} threshold={0.1} direction="up">
  <Card>...</Card>
</AnimateOnScroll>
```

**Features:**
- Uses native IntersectionObserver API
- Supports cascade delays (0, 0.15, 0.3s, etc.)
- Directions: up, down, left, right
- Respects prefers-reduced-motion
- Smooth 600ms transitions with cubic-bezier(0.4, 0, 0.2, 1)

### ScrollStory Component
Creates scroll-driven narrative experiences:

```svelte
<ScrollStory paragraphs={[
  "First paragraph...",
  "Second paragraph...",
  "Third paragraph..."
]} />
```

**Features:**
- Progressive disclosure based on scroll position
- Fade in/out transitions for each paragraph
- Full-height sections (~100vh per paragraph)
- Progress indicator dots
- Sticky text positioning

## Accessibility Features

- **ARIA Compliance**: All interactive components have proper ARIA attributes
- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Space)
- **Focus Management**: Visible focus indicators on all interactive elements
- **Reduced Motion**: Animations respect `prefers-reduced-motion`
- **Semantic HTML**: Proper heading hierarchy, landmarks, and roles
- **Screen Reader Support**: Tested with VoiceOver/NVDA

## Responsive Design

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px (custom container max-width)

### Container Pattern
```svelte
<div class="container mx-auto px-4 md:px-6">
  <!-- Content -->
</div>
```

### Grid Patterns
- Mobile-first: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Condensed pills: `grid-cols-1 md:grid-cols-3 lg:grid-cols-5`
- Service offerings: `grid-cols-1 lg:grid-cols-2`

## Build & Deployment

### Build Command
```bash
npm run build
```

Outputs to `.svelte-kit/output/` with:
- `/client` - Static assets and client-side JS
- `/server` - Server-side rendering code

### Development
```bash
npm run dev
```

### Type Checking
```bash
npm run check
```

## Performance Considerations

- **Lazy Loading**: Images use `loading="lazy"` attribute
- **WebP Images**: Modern image format for better compression
- **Code Splitting**: SvelteKit automatically splits routes
- **Font Optimization**: Variable fonts with unicode-range subsetting
- **CSS Purging**: Tailwind purges unused styles in production

## Corporate Positioning Updates (Feb 2025)

The website was redesigned to support Fatma's expansion into corporate transformation work:

### New Services
1. **AI Transformation & Responsible Technology Integration**
   - Human-centered AI adoption strategies
   - Ethics, governance, and cultural transformation
   - Target: Organizations implementing AI ethically

2. **Change Management & Organizational Transformation**
   - Readiness assessment and stakeholder alignment
   - Integration of organizational psychology and systems thinking
   - Target: Companies navigating restructures, mergers, cultural shifts

### Design Enhancements
- Increased vertical spacing (py-32) for premium, breathable feel
- Premium card variants with enhanced shadows and hover effects
- Multi-color gradient backgrounds (water → spirit → fire)
- Sophisticated scroll animations with cascade delays
- Accordion UI for FAQ sections
- Scroll-based narrative storytelling

### Email Update
All contact information updated from `fatma.ghedira@gmail.com` to `fatma@cooncircles.com`
