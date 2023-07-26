<script>
  import ExportableOnHover from "./ExportableOnHover.svelte";

  export let cardComponent
  export let cardStore
  export let onClickAddCard
  export let onClickEditCard
  export let onClickDeleteCard
  export let style = "width: 320px; height: 480px; max-width: 100%;"

  function handleAdd() {
    if (onClickAddCard) onClickAddCard();
  }

  function handleEdit(uuid) {
    if (onClickEditCard) onClickEditCard(uuid);
  }

  function handleDelete(uuid) {
    if (onClickDeleteCard) onClickDeleteCard(uuid);
  }
</script>

<div class="is-flex is-flex-wrap-wrap">
  {#if onClickAddCard}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
      class='m-2 button is-dark box is-flex is-justify-content-center is-align-items-center is-size-1'
      {style}
      on:click={handleAdd}
    >
      <div class="has-text-light">
        <iconify-icon icon="mi:add"></iconify-icon>
      </div>
    </div>
  {/if}
  {#each $cardStore as card}
    <div class="m-2">
      <ExportableOnHover handleEdit={() => handleEdit(card.uuid)} handleDelete={() => handleDelete(card.uuid)} >
        <svelte:component this={cardComponent} {...card} />
      </ExportableOnHover>
    </div>
  {/each}
</div>
