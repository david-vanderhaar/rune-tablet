<script>
  import html2canvas from 'html2canvas';
  import { toast } from '@zerodevx/svelte-toast';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import TagPicker from './TagPicker.svelte';
  import TagInput from "./TagInput.svelte";
  import ActionList from './ActionList.svelte';
  import EquipmentCard from './EquipmentCard.svelte';
  import CardTemplateSelector from './CardTemplateSelector.svelte';
  import gearStore from "../data/gear";

  const titleDefault = '';
  const itemTagsDefault = [];
  const rangeDefault = [];
  const flavorTextDefault = '';
  const extraTextDefault = '';
  const actionsDefault = [];

  export let uuid = null;
  export let title = titleDefault;
  export let itemTags = itemTagsDefault;
  export let range = rangeDefault;
  export let flavorText = flavorTextDefault;
  export let extraText = extraTextDefault;
  export let actions = actionsDefault;
  export let editMode = false;

  function handleSelectEquipmentTemplate(templateCard) {
    title = templateCard?.title || titleDefault;
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
    if (editMode) {
      gearStore.edit(uuid, {
        title,
        itemTags,
        range,
        flavorText,
        extraText,
        actions,
      });
    } else {
      gearStore.add({
        title,
        itemTags,
        range,
        flavorText,
        extraText,
        actions,
      });
    }

    toast.push('saved card')
    goto(`${base}/equipment`);
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

<div class="container">
  <div class="columns">
    <div class="column is-half">
      <a href="{base}/equipment" class="button is-outlined mb-4">
        <span class="icon">
          <iconify-icon icon="mi:arrow-left"></iconify-icon>
        </span>
        <span>Back</span>
      </a>
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
      <div
        style="width: 320px; height: 480px;"
        bind:this={exportContainer}
      >
        <EquipmentCard {title} {itemTags} {range} {flavorText} {extraText} {actions} />
      </div>
      <br>
      <div class="field">
        <div class="control">
          <button class="button is-primary" on:click={saveCard}>
            {editMode ? 'Save Changes' : 'Create Card'}
          </button>
          <CardTemplateSelector onSelect={handleSelectEquipmentTemplate} templateCards={$gearStore} />
          <button class="button is-dark" on:click={exportComponent}>Export as PNG</button>
        </div>
      </div>
    </div>
  </div>
</div>
