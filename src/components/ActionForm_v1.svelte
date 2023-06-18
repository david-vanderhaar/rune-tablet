<script>
  import ActionList from './ActionList.svelte';

  import ActionDisplay from "./ActionDisplay.svelte";
  import TagPicker from "./TagPicker.svelte";
  import { extraEffects as extraEffectsData } from "../data/extraEffects";
  export let onAddAction = () => null;
  export let onRemoveAction = () => null;
  export let actions = [];

  // const triggerOptions = [1, 2, 3, 4, 5, 6]
  const triggerOptions = [
    '⚀', // Unicode character for dice face 1
    '⚁', // Unicode character for dice face 2
    '⚂', // Unicode character for dice face 3
    '⚃', // Unicode character for dice face 4
    '⚄', // Unicode character for dice face 5
    '⚅'  // Unicode character for dice face 6
  ];

  const extraEffectOptions = Object.keys(extraEffectsData);

  let triggers = [];
  let actionEffect = '';
  let extraEffects = [];

  function handleAddAction(action) {
    onAddAction(action);
    handleHideForm();
    clearForm();
  }

  function handleRemoveAction(action) {
    onRemoveAction(action);
  }

  function clearForm() {
    triggers = [];
    actionEffect = [];
    extraEffects = [];
  }

  let showForm = false;
  function handleShowForm() {
    showForm = true;
  }

  function handleHideForm() {
    showForm = false;
    if (editing) editing = false;
  }

  function handleShowFormKey(event) {
    if (event.key === 'Enter') {
      handleShowForm();
    }
  }

  let editing = false
  function handleEditAction(action) {
    handleRemoveAction(action);
    editing = true;
    triggers = action.triggers;
    actionEffect = action.actionEffect;
    extraEffects = action.extraEffects;
    handleShowForm();
  }
</script>

<div>
  <hr>
  {#each actions as action}
    <div class="box">
      <div class="is-flex is-align-items-center">
        <div class="is-flex-grow-1">
          <ActionDisplay {action} />
        </div>
        <div>
          <button class="button is-light" on:click={() => handleEditAction(action)}>Edit</button>
          <button class="button is-danger" on:click={() => handleRemoveAction(action)}>Remove</button>
        </div>
      </div>
    </div>
  {/each}
  {#if showForm}
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
        on:click={() => handleAddAction({ triggers, actionEffect, extraEffects })}
        disabled={!actionEffect.length}
      >
        Add Action
      </button>
      <button
        class="button is-secondary"
        on:click={editing ? () => handleAddAction({ triggers, actionEffect, extraEffects }) : handleHideForm}
      >
        Cancel
      </button>
    </div>
  {:else}
    <div class="box is-outlined is-secondary button" on:click={handleShowForm} on:keydown={handleShowFormKey}>
      <div class="has-text-grey">
        +
      </div>
    </div>
  {/if}
  <hr>
</div>
