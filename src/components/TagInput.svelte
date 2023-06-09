<script>
  export let tags = [];
  export let onTagsChange;

  let newTag = '';

  function addTag() {
    if (newTag.trim() !== '') {
      const updatedTags = [...tags, newTag.trim()];
      onTagsChange(updatedTags);
      newTag = '';
    }
  }

  function removeTag(index) {
    const updatedTags = tags.filter((_, i) => i !== index);
    onTagsChange(updatedTags);
  }

</script>

<div class="field">
  <label class="label">Item Tags</label>
  <div class="control">
    <div class="tag-input">
      <div class="field has-addons">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Enter tag"
            bind:value={newTag}
            on:keydown={(event) => {
              if (event.key === 'Enter') {
                addTag();
              }
            }}
          />
        </div>
        <div class="control">
          <button class="button is-primary" on:click={addTag}>Add Tag</button>
        </div>
      </div>
      <div class="tags">
        {#each tags as tag, index}
          <span class="tag is-primary">
            {tag}
            <button class="delete is-small" on:click={() => removeTag(index)}></button>
          </span>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
  }

  .tag {
    margin-right: 0.5rem;
  }
</style>
