<script>
  import { v4 as uuidv4 } from 'uuid';
  import TagPicker from "./TagPicker.svelte";
  import extraEffectStore from "../data/extraEffects";
  import triggerStore from "../data/triggers";

  export let onAddAction = () => null;
  export let onCancel = () => null;
  export let action = null

  let triggers = action?.triggers || [];
  let actionEffect = action?.actionEffect || '';
  let extraEffects = action?.extraEffects || [];
  let id = action?.id || uuidv4();

  const triggerOptions = triggerStore.get();

  function handleTriggerTagsChange(updatedTags) {
    triggers = updatedTags;
  }

  function handleUpdateTriggerOptions(updatedTags) {
    triggerStore.addUnique(updatedTags);
  }

  const extraEffectsData = extraEffectStore.getExtraEffects();
  const extraEffectOptions = Object.keys(extraEffectsData);

  function handleExtraEffectTagsChange(updatedTags) {
    extraEffects = updatedTags;
  }
  
  function handleUpdateExtraEffectOptions(updatedTags) {
    extraEffectStore.addUniqueExtraEffects(updatedTags);
  }

  function handleAddAction(action) {
    onAddAction(action);
  }
</script>

<div>
  <hr>
    <div>
      <TagPicker
        label="Triggers"
        availableTags={triggerOptions}
        selectedTags={triggers}
        onTagsChange={handleTriggerTagsChange}
        onUpdateTagOptions={handleUpdateTriggerOptions}
        tagSize="large"
        deleteable={false}
      />

    <div class="field">
      <label class="label">Action Effect</label>
      <div class="control">
        <input
          class="input"
          type="text"
          bind:value={actionEffect}
          placeholder="Move 1, Harm 2"
        />
      </div>
    </div>

    <TagPicker 
      label='Extra Effects'
      availableTags={extraEffectOptions}
      selectedTags={extraEffects}
      onTagsChange={handleExtraEffectTagsChange}
      onUpdateTagOptions={handleUpdateExtraEffectOptions}
      deleteable={false}
    />

    <button
      class="button is-primary"
      on:click={() => handleAddAction({id, triggers, actionEffect, extraEffects })}
      disabled={!actionEffect.length}
    >
      Add Action
    </button>
    <button
      class="button is-secondary"
      on:click={onCancel}
    >
      Cancel
    </button>
  </div>
  <hr>
</div>
