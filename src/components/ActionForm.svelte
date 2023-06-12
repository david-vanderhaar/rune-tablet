<script>
  import TagPicker from "./TagPicker.svelte";
  export const onAddAction = () => {};

  const triggerOptions = [1, 2, 3, 4, 5, 6]
  const extraEffectOptions = ['Cleave', 'Unblockable', 'Piercing'];

  let triggers = [];
  let actionsEffect = [];
  let extraEffects = [];

  function handleAddAction(action) {
    onAddAction(action);
    clearForm();
  }

  function clearForm() {
    triggers = [];
    actionsEffect = [];
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
    />

    <TagPicker 
      label='Extra Effects'
      {extraEffects}
      availableTags={extraEffectOptions}
    />
  </div>
  <hr>
</div>
