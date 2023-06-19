<script>
  import { base } from "$app/paths";

  let mobileMenuOpen = false;
</script>

<nav class="navbar section pb-2 pt-4" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item p-0" href="{base}/">
      <p class="menu-label">RUNE Tablet</p>
    </a>

    <!-- svelte-ignore a11y-missing-attribute -->
    <a role="button" class="navbar-burger {mobileMenuOpen ? 'is-active' : ''}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" on:click={() => mobileMenuOpen = !mobileMenuOpen}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu {mobileMenuOpen ? 'is-active' : ''}">
    <div class="navbar-start">
      <a class="navbar-item" href="{base}/gear">Gear</a>
      <!-- <a class="navbar-item" href="{base}/character">Character</a> -->
      <!-- <a class="navbar-item" href="{base}/scenarios">Scenarios</a> -->
      <a class="navbar-item" href="{base}/">About</a>
    </div>
  </div>
</nav>
<section class="section pt-0"><slot></slot></section>

