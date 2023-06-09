<script>
  let title = '';
  let itemTypeTags = '';
  let flavorText = '';
  let abilities = '';

  function saveCard() {
    // Implement your logic to save the card data here
    console.log({
      title,
      itemTypeTags,
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

        <div class="field">
          <label class="label">Item Type Tags</label>
          <div class="control">
            <input
              class="input"
              type="text"
              bind:value={itemTypeTags}
              placeholder="Enter item type tags"
            />
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
            <p class="subtitle">{itemTypeTags}</p>
            <div class="content">
              <p>{flavorText}</p>
              <hr />
              <p>Abilities:</p>
              <ul>
                {#each abilities.split('\n') as ability}
                  <li>{ability}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
