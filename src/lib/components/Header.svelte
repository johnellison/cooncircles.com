<script lang="ts">
  import { page } from "$app/state";
  let mobileOpen = $state(false);
  const links = [
    { href: "/offerings", label: "Offerings" },
    { href: "/coaching-companion", label: "Coaching Companion" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const companion = $derived(
    page.url.pathname.startsWith("/coaching-companion"),
  );
  $effect(() => {
    page.url.pathname;
    mobileOpen = false;
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 bg-footer-dark text-white"
  aria-label="Main navigation"
>
  <div class="container mx-auto px-4 md:px-6">
    <div class="flex items-center justify-between h-16 gap-4">
      <a href="/" aria-label="Coon Circles home"
        ><img src="/logo-white.png" alt="Coon" class="h-8 w-auto" /></a
      >
      <div class="hidden lg:flex items-center gap-7">
        {#each links as link}
          <a
            href={link.href}
            aria-current={page.url.pathname.startsWith(link.href)
              ? "page"
              : undefined}
            class="text-sm text-white/80 hover:text-white">{link.label}</a
          >
        {/each}
      </div>
      <div class="flex items-center gap-3">
        {#if companion}
          <a
            href="/coaching-companion#plans"
            class="rounded-full bg-sage px-4 py-2 text-sm font-medium text-earth-primary"
            >Explore the plans</a
          >
        {:else}
          <a
            href="https://calendly.com/fatma-ghedira/30min"
            target="_blank"
            rel="noopener"
            class="rounded-md bg-sage px-4 py-2 text-sm font-medium text-earth-primary"
            >Book time with me</a
          >
        {/if}
        <button
          class="lg:hidden rounded-md border border-white/40 px-3 py-2 text-sm"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onclick={() => (mobileOpen = !mobileOpen)}
          >{mobileOpen ? "Close" : "Menu"}</button
        >
      </div>
    </div>
    <div id="mobile-navigation" hidden={!mobileOpen} class="lg:hidden pb-4">
      {#each links as link}
        <a
          href={link.href}
          onclick={() => (mobileOpen = false)}
          aria-current={page.url.pathname.startsWith(link.href)
            ? "page"
            : undefined}
          class="block rounded px-2 py-3 text-sm text-white/90 hover:bg-white/10"
          >{link.label}</a
        >
      {/each}
    </div>
  </div>
</nav>

<style>
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid white;
    outline-offset: 4px;
  }
  a[aria-current="page"] {
    text-decoration: underline;
    text-underline-offset: 6px;
  }
</style>
