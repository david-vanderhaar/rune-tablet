<script>
  import TagPicker from '../../components/TagPicker.svelte';
  import html2canvas from 'html2canvas';
  import ActionDisplay from '../../components/ActionDisplay.svelte';
  import TagInput from "../../components/TagInput.svelte";
  import extraEffectStore from '../../data/extraEffects';
  import ActionList from '../../components/ActionList.svelte';

  let title = '';
  let itemTags = [];
  let range = [];
  let flavorText = '';
  let extraText = '';
  let actions = [];

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

  const extraEffects = extraEffectStore.getExtraEffects();
  let allUniqueExtraEffects = [];
  function getAllUniqueExtraEffectsFromActions() {
    let allExtraEffects = actions.reduce((acc, action) => {
      return [...acc, ...action.extraEffects];
    }, []);

    allUniqueExtraEffects = [...new Set(allExtraEffects)];
  }

  $: {
    calculateRangeLabel();
    getAllUniqueExtraEffectsFromActions();
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

<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-half">
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

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" on:click={saveCard}>
              Save Card
            </button>
          </div>
          <button class="button is-secondary" on:click={exportComponent}>Export as PNG</button>
        </div>
      </div>

      <div class="column is-half">
        <div class="card" id="export-card" bind:this={exportContainer}>
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
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .card {
    height: 600px;
    width: 400px;
    border: black 11px double;

  }
</style>
