<script>
  import TagPicker from "./TagPicker.svelte";
  export let onAddAction = () => null;
  export let onRemoveAction = () => null;
  export let actions = [];

  const triggerOptions = [1, 2, 3, 4, 5, 6]
  const extraEffectOptions = ['Cleave', 'Unblockable', 'Piercing'];

  let triggers = [];
  let actionEffect = '';
  let extraEffects = [];

  function handleAddAction(action) {
    onAddAction(action);
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
</script>

<div>
  <hr>
  <label class="label is-medium">Actions</label>
  <div>
    <TagPicker
      label="Triggers"
      availableTags={triggerOptions}
      selectedTags={triggers}
      onTagsChange={(updatedTags) => (triggers = updatedTags)}
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
  </div>
  <br>
  {#each actions as action}
    <div class="box">
      <div class="columns">
        <div class="column">
          <div>{action.triggers.join(', ') + (action.triggers.length ? ' - ' : '')} {action.actionEffect}</div>
          <div><em>{action.extraEffects.join(', ')}</em></div>
        </div>
        <div class="column">
          <button class="button is-danger" on:click={() => handleRemoveAction(action)}>Remove</button>
        </div>
      </div>
    </div>
  {/each}

  <hr>
</div>
