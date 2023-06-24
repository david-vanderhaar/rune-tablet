<script>
  import { base } from "$app/paths";

  let mobileMenuOpen = false;
</script>

<nav class="navbar section pb-2 pt-4" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item p-0 pr-2" href="{base}/">
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
      <a class="navbar-item" href="{base}/play">Play</a>
      <a class="navbar-item" href="{base}/equipment">Equipment</a>
      <!-- <a class="navbar-item" href="{base}/character">Character</a> -->
      <!-- <a class="navbar-item" href="{base}/scenarios">Scenarios</a> -->
      <a class="navbar-item" href="{base}/">About</a>
    </div>
  </div>
</nav>
<main class="section pt-0"><slot></slot></main>

<style>
  /* smooth route transitions */
  #app {
    display: grid;
    height: 100%;
    width: 100%;
    overflow: auto;
    grid-template:
      "nav" 3rem
      "main" 1fr
      / auto;
  }

  nav {
    grid-area: nav;
  }

  main {
    grid-area: main;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  main > :global(*) {
    grid-row: 1;
    grid-column: 1;
  }

  @media (max-width: 400px) {
    main {
      display: block;
    }
  }

  #app {
    overscroll-behavior: none;
    touch-action: none;
  }
</style>
