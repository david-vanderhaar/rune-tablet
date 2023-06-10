<script>
  import TagInput from "../../components/TagInput.svelte";

  let title = 'Item Name';
  let itemTags = ['Weapon', 'Magic']
  let range = null;
  let flavorText = '';
  let abilities = '';

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
      abilities,
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
                <option value="0" label="Same (0)">0</option>
                <option value="1" label="Adjacent (1)">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
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

        <div class="field">
          <label class="label">Abilities</label>
          <div class="control">
            <textarea
              class="textarea"
              bind:value={abilities}
              placeholder="Enter abilities"
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
          <div class="card-content">
            <p class="title">{title}</p>
            <p class="subtitle">{itemTags.join(', ')}</p>
            {#if range}
              <p class="subtitle">Range: {rangeLabelMap[range]}</p>
            {/if}
            <hr />
            <div class="content">
              <p>Abilities:</p>
              <ul>
                {#each abilities.split('\n') as ability}
                  <li>{ability}</li>
                {/each}
              </ul>
              <hr />
              <p>Special Definitions</p>
              <p>{flavorText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
