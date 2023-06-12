<script>
  export let selectedTags = [];
  export let availableTags = [];
  export let label = 'Tags';

  function toggleTag(tag) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((t) => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
  }
</script>

<div class="tag-picker">
  <label class="label">{label}</label>
  <div class="tags">
    {#each availableTags as tag}
      <span
        class="tag"
        class:selected={selectedTags.includes(tag)}
        on:click={() => toggleTag(tag)}
      >
        {tag}
      </span>
    {/each}
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
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 4px;
  }

  .tag.selected {
    background-color: #3273dc;
    color: #fff;
  }
</style>
