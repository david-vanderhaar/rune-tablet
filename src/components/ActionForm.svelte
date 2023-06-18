<script>
  import { v4 as uuidv4 } from 'uuid';
  import TagPicker from "./TagPicker.svelte";
  import { extraEffects as extraEffectsData } from "../data/extraEffects";
  export let onAddAction = () => null;
  export let onCancel = () => null;
  export let action = null

  const triggerOptions = ['⚀','⚁','⚂','⚃','⚄','⚅'];
  const extraEffectOptions = Object.keys(extraEffectsData);

  let triggers = action?.triggers || [];
  let actionEffect = action?.actionEffect || '';
  let extraEffects = action?.extraEffects || [];
  let id = action?.id || uuidv4();

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
        onTagsChange={(updatedTags) => (triggers = updatedTags)}
        tagSize="large"
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
      onTagsChange={(updatedTags) => (extraEffects = updatedTags)}
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
