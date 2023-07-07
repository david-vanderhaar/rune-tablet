<script>
  export let cardComponent
  export let cardStore
</script>

<div class="is-flex is-flex-wrap-wrap">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- <div 
    class='m-2 box is-outlined is-secondary'
    style="width: 400px; height: 600px; max-width: 100%;"
    on:click={handleShowForm}
  >
    <div class="has-text-grey">
      +
    </div>
  </div> -->
  {#each $cardStore as card}
    <div class="m-2">
      <svelte:component this={cardComponent} {...card} />
    </div>
  {/each}
</div>
