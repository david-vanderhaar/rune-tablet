<script>
  export let templateCards = []
  export let onSelect;
  export let label = 'Templates'
</script>

<div class="dropdown is-down is-hoverable mb-2">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span class='mr-1'>{label}</span>
      <iconify-icon icon="mi:chevron-down"></iconify-icon>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      {#each templateCards as templateCard}
        <div class="dropdown-item">
          <button class='is-flex is-justify-content-space-between button is-fullwidth is-dark' on:click={() => onSelect(templateCard)}>
            {templateCard.title}
          </button>
        </div>
        {/each}
    </div>
  </div>
</div>

<style>
  .dropdown, .dropdown-menu, .dropdown-content, .dropdown-item, .dropdown-trigger, .button {
    width: 100%;
  }
</style>