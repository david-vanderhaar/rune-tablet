<script>
  import html2canvas from 'html2canvas';
  import { toast } from '@zerodevx/svelte-toast'
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import TagPicker from '../../../components/TagPicker.svelte';
  import TagInput from "../../../components/TagInput.svelte";
  import ActionList from '../../../components/ActionList.svelte';
  import BeastiaryCard from '../../../components/BeastiaryCard.svelte';
  import CardTemplateSelector from '../../../components/CardTemplateSelector.svelte';
  import beastiaryStore from '../../../data/beastiary';

  const titleDefault = '';
  const healthDefault = '';
  const staminaDefault = '';
  const itemTagsDefault = [];
  const rangeDefault = [];
  const flavorTextDefault = '';
  const extraTextDefault = '';
  const actionsDefault = [];

  let title = titleDefault;
  let health = healthDefault;
  let stamina = staminaDefault;
  let itemTags = itemTagsDefault;
  let range = rangeDefault;
  let flavorText = flavorTextDefault;
  let extraText = extraTextDefault;
  let actions = actionsDefault;

  function handleSelectEquipmentTemplate(templateCard) {
    title = templateCard?.title || titleDefault;
    health = templateCard?.health || healthDefault;
    stamina = templateCard?.stamina || staminaDefault;
    itemTags = templateCard?.itemTags || itemTagsDefault;
    range = templateCard?.range || rangeDefault;
    flavorText = templateCard?.flavorText || flavorTextDefault;
    extraText = templateCard?.extraText || extraTextDefault;
    actions = templateCard?.actions || actionsDefault;
  }

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
    beastiaryStore.add({
      title,
      health,
      stamina,
      itemTags,
      range,
      flavorText,
      extraText,
      actions,
    });

    toast.push('saved card')
    goto(`${base}/bestiary`);
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
    <a href="{base}/bestiary" class="button is-outlined mb-4">
      <span class="icon">
        <iconify-icon icon="mi:arrow-left"></iconify-icon>
      </span>
      <span>Back</span>
    </a>
    <div class="columns is-flex-wrap-wrap-reverse">
      <div class="column is-half">
        <div>
          <!-- form -->
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                bind:value={title}
                placeholder="Name"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Health</label>
            <div class="control">
              <input
                class="input"
                bind:value={health}
                placeholder="3"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Stamina</label>
            <div class="control">
              <input
                class="input"
                bind:value={stamina}
                placeholder="1"
              />
            </div>
          </div>

          <TagInput placeholder='Undead' tags={itemTags} onTagsChange={handleTagsChange} />

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

      <div class="column">
        <div style="width: 480px; height: 320px;" bind:this={exportContainer}>
          <BeastiaryCard {title} {itemTags} {range} {flavorText} {extraText} {actions} {health} {stamina} />
        </div>
        <br>
        <div class="field">
          <div class="control">
            <button class="button is-primary" on:click={saveCard}>
              Save Card
            </button>
            <CardTemplateSelector onSelect={handleSelectEquipmentTemplate} templateCards={$beastiaryStore} />
            <button class="button is-dark" on:click={exportComponent}>Export as PNG</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
