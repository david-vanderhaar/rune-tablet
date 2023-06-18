<script>
  import ActionDisplay from "./ActionDisplay.svelte";
  import ActionForm from "./ActionForm.svelte";
  export let onAddAction = () => null;
  export let onEditAction = () => null;
  export let onRemoveAction = () => null;
  export let actions = [];


  function handleAddAction(action) {
    onAddAction(action);
    handleHideForm();
  }

  function handleRemoveAction(action) {
    onRemoveAction(action);
  }

  let showForm = false;
  function handleShowForm() {
    showForm = true;
  }

  function handleHideForm() {
    showForm = false;
    if (editing) editing = false;
  }

  function handleCancel() {
    handleHideForm();
  }

  function handleShowFormKey(event) {
    if (event.key === 'Enter') {
      handleShowForm();
    }
  }

  let editing = null
  function handleEditAction(newAction) {
    onEditAction(newAction);
    editing = null;
  }

  function handleCancelEdit() {
    editing = null;
  }

  function handleShowEditAction(action) {
    editing = action;
  }
</script>

<div>
  <label class="label is-medium">Actions</label>
  {#each actions as action (action)}
    <div class="box">
      {#if editing && (editing.id === action.id)}
        <ActionForm onAddAction={handleEditAction} onCancel={handleCancelEdit} {action} />
      {:else}
        <div class="is-flex is-align-items-center">
          <div class="is-flex-grow-1">
            <ActionDisplay {action} />
          </div>
          <div>
            <button class="button is-light" on:click={() => handleShowEditAction(action)}>Edit</button>
            <button class="button is-danger" on:click={() => handleRemoveAction(action)}>Remove</button>
          </div>
        </div>
      {/if}
    </div>
  {/each}
  {#if showForm}
    <ActionForm onAddAction={handleAddAction} onCancel={handleCancel} />
  {:else}
    <div class="box is-outlined is-secondary button" on:click={handleShowForm} on:keydown={handleShowFormKey}>
      <div class="has-text-grey">
        +
      </div>
    </div>
  {/if}
</div>

