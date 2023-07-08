<script>
  export let templateCards = []
  export let onSelect;
  export let label = 'Templates'
  export let isFullWidth = false;
  export let dropdownDirection = 'down';

  let dropdownActive = false;

  function handleDropdownClick() { dropdownActive = !dropdownActive }

  function handleCardClick(templateCard) {
    dropdownActive = false;
    onSelect(templateCard)
  }

  $: iconifyIcon = dropdownActive ? 'mi:chevron-up' : 'mi:chevron-down';


  function handleClickAway(event) {
    if (dropdownActive) {
      const dropdown = document.querySelector('.dropdown');
      if (!dropdown.contains(event.target)) {
        dropdownActive = false;
      }
    }
  }
</script>

<div 
  class="dropdown is-{dropdownDirection} mb-2"
  class:is-active={dropdownActive}
  class:full-width-select={isFullWidth}
>
  <div class="dropdown-trigger" class:full-width-select={isFullWidth}>
    <button 
      class="button"
      class:full-width-select={isFullWidth}
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      on:click={handleDropdownClick}
    >
      <span class='mr-1'>{label}</span>
      <iconify-icon icon="{iconifyIcon}"></iconify-icon>
    </button>
  </div>
  <div class="dropdown-menu" class:full-width-select={isFullWidth} id="dropdown-menu" role="menu">
    <div class="dropdown-content" class:full-width-select={isFullWidth}>
      {#each templateCards as templateCard}
        <div class="dropdown-item" class:full-width-select={isFullWidth}>
          <button
            class='is-flex is-justify-content-space-between button is-fullwidth is-dark'
            class:full-width-select={isFullWidth}
            on:click={() => handleCardClick(templateCard)}
          >
            {templateCard.title}
          </button>
        </div>
        {/each}
    </div>
  </div>
</div>

<svelte:window  on:click={handleClickAway} />

<style>
  .full-width-select {
    width: 100%;
  }
</style>