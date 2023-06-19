<script>
  import html2canvas from 'html2canvas';
  import { fade } from 'svelte/transition';
  import TagPicker from '../../components/TagPicker.svelte';
  import TagInput from "../../components/TagInput.svelte";
  import ActionList from '../../components/ActionList.svelte';
  import EquipmentCard from '../../components/EquipmentCard.svelte';
  import templateCards from '../../data/gear.js';

  const titleDefault = '';
  const itemTagsDefault = [];
  const rangeDefault = [];
  const flavorTextDefault = '';
  const extraTextDefault = '';
  const actionsDefault = [];

  let title = titleDefault;
  let itemTags = itemTagsDefault;
  let range = rangeDefault;
  let flavorText = flavorTextDefault;
  let extraText = extraTextDefault;
  let actions = actionsDefault;

  function onAddAction(action) {
    actions = [...actions, action];
  }

  function onEditAction(newAction) {
    actions = actions.map(action => {
      if (action.id === newAction.id) return newAction;
      return action;
    });
  }

  function onRemoveAction(action) {
    actions = actions.filter(a => a.id !== action.id);
  }

  function handleTagsChange(updatedTags) {
    itemTags = updatedTags;
  }

  let rangeLabel;
  const rangeLabelMap = {
    0: 'Same',
    1: 'Adjacent',
    2: '2',
    3: '3'
  }

  function calculateRangeLabel() {
    rangeLabel = rangeLabelMap[range]
  }

  $: {
    calculateRangeLabel();
    actions;
  }

  function saveCard() {
    // Implement your logic to save the card data here
    console.log({
      title,
      range,
      flavorText,
      extraText,
      actions,
    });
  }

  let exportContainer;

  function exportComponent() {
    html2canvas(exportContainer).then(canvas => {
      const pngUrl = canvas.toDataURL('image/png');
      downloadPng(pngUrl);
    });
  }

  function downloadPng(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rune_card.png';
    link.click();
  }

</script>

<section transition:fade>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div class="dropdown is-hoverable mb-2">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span class='mr-1'>Templates</span>
              <iconify-icon icon="mi:chevron-down"></iconify-icon>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              {#each templateCards as templateCard}
                <div class="dropdown-item">
                  <button class='is-flex is-justify-content-space-between button is-fullwidth is-dark' on:click={() => {
                    title = templateCard?.title || titleDefault;
                    itemTags = templateCard?.itemTags || itemTagsDefault;
                    range = templateCard?.range || rangeDefault;
                    flavorText = templateCard?.flavorText || flavorTextDefault;
                    extraText = templateCard?.extraText || extraTextDefault;
                    actions = templateCard?.actions || actionsDefault;
                  }}>
                    {templateCard.title}
                    <iconify-icon icon="mi:plus"></iconify-icon>
                  </button>
                </div>
                <!-- <hr class="dropdown-divider"> -->
                {/each}
            </div>
          </div>
        </div>
        <div>
          <!-- form -->
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                class="input"
                type="text"
                bind:value={title}
                placeholder="Card Title"
              />
            </div>
          </div>

          <TagInput placeholder='Axe' tags={itemTags} onTagsChange={handleTagsChange} />

          <TagPicker
            label='Range'
            availableTags={Object.values(rangeLabelMap)}
            selectedTags={range}
            onTagsChange={(updatedTags) => (range = updatedTags)}
          />

          <ActionList {actions} {onAddAction} {onRemoveAction} {onEditAction} /> 
          <br>
          <div class="field">
            <label class="label">Extra Text</label>
            <div class="control">
              <textarea
                class="textarea"
                bind:value={extraText}
                placeholder="Enter any extra text"
              ></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">Flavor Text</label>
            <div class="control">
              <textarea
                class="textarea"
                bind:value={flavorText}
                placeholder="Enter flavor text"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-half">
        <div style="width: 400px; height: 600px;" id="export-card" bind:this={exportContainer}>
          <EquipmentCard {title} {itemTags} {range} {flavorText} {extraText} {actions} />
        </div>
        <!-- <div class="card equipment-card" id="export-card" bind:this={exportContainer}>
          <div class="card-content has-text-centered">
            <p class="title">{title}</p>
            <div class="is-size-6 subtitle">
              <p>{itemTags.join(', ')}</p>
              {#if range.length > 0}
                <p>Range: {range.join(', ')}</p>
              {/if}
            </div>
            <hr />
            <div class="content">
              {#each actions as action (action)}
                <ActionDisplay {action}/>
              {/each}
              <hr />
              {#each allUniqueExtraEffects as extraEffect}
                {#if extraEffects[extraEffect]}
                  <p><em>{extraEffect}</em>: {extraEffects[extraEffect]}</p>
                {/if}
              {/each}
              <p class="has-text-centered">{extraText}</p>
              <p class="has-text-grey is-italic has-text-centered">{flavorText}</p>
            </div>
          </div>
        </div> -->
        <br>
        <div class="field is-grouped">
          <!-- <div class="control">
            <button class="button is-primary" on:click={saveCard}>
              Save Card
            </button>
          </div> -->
          <button class="button is-dark" on:click={exportComponent}>Export as PNG</button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .template-card {
    /* transform: scale(0.3);
    width: 400px;
    height: 600px; */
    width: 100px;
    height: 150px;
  }
</style>
