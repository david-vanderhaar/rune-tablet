<script>
  import ActionDisplay from '../../components/ActionDisplay.svelte';
  import ActionForm from "../../components/ActionForm.svelte";
  import TagInput from "../../components/TagInput.svelte";
  import TagPicker from '../../components/TagPicker.svelte';

  let title = 'Item Name';
  let itemTags = ['Weapon', 'Magic']
  let range = null;
  let flavorText = '';
  let actions = [];

  function onAddAction(action) {
    actions = [...actions, action];
  }

  function onRemoveAction(action) {
    actions = actions.filter((a) => a !== action);
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
    calculateRangeLabel()
  }

  function saveCard() {
    // Implement your logic to save the card data here
    console.log({
      title,
      range,
      flavorText,
      actions,
    });
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
              placeholder="Enter title"
            />
          </div>
        </div>

        <TagInput tags={itemTags} onTagsChange={handleTagsChange} />

        <div class="field">
          <label class="label">Range</label>
          <div class="control">
            <div class="select">
              <select bind:value={range}>
                <option value={null} label="None">None</option>
                <option value="0" label="Same (0)">0</option>
                <option value="1" label="Adjacent (1)">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>

        <ActionForm {onAddAction} {onRemoveAction} {actions} />

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
          <div class="control">
            <button class="button is-light">Cancel</button>
          </div>
        </div>
      </div>

      <div class="column is-half">
        <div class="card">
          <div class="card-content has-text-centered">
            <p class="title">{title}</p>
            <div class="is-size-6 subtitle">
              <p>{itemTags.join(', ')}</p>
              {#if range}
                <p>Range: {rangeLabelMap[range]}</p>
              {/if}
            </div>
            <hr />
            <div class="content">
              {#each actions as action}
                <ActionDisplay {action}/>
              {/each}
              <hr />
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
