<script>
  export let selectedTags = [];
  export let availableTags = [];
  export let label = 'Tags';
  export let onTagsChange = () => null;
  export let tagSize = null;

  function toggleTag(tag) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((t) => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
    onTagsChange(selectedTags);
  }
</script>

<div class="tag-picker">
  <label class="label">{label}</label>
  <div class="tags">
    {#each availableTags as tag}
      <span
        class="tag {tagSize ? `tag-picker-size-${tagSize}` : ''}"
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

  .tag-picker-size-small {
    font-size: 0.75rem;
  }

  .tag-picker-size-medium {
    font-size: 4rem;
    height: 4rem;
  }

  .tag-picker-size-large {
    font-size: 6rem;
    height: 6rem;
  }
</style>
