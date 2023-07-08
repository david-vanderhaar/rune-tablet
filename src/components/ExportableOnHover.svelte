<script>
  import html2canvas from 'html2canvas';
    import { fade } from 'svelte/transition';

  let exportContainer;

  function exportComponent() {
    html2canvas(exportContainer).then(canvas => {
      const pngUrl = canvas.toDataURL('image/png');
      downloadPng(pngUrl);
    });
  }

  function downloadPng(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rune_card.png';
    link.click();
  }

  let showButtons = false;
  function showButtonsTrue() { showButtons = true; }
  function showButtonsFalse() { showButtons = false; }

  function handlePointerEnter(e) {
    e.preventDefault();
    showButtonsTrue()
  }

  function handlePointerLeave(e) {
    e.preventDefault();
    showButtonsFalse()
  }

</script>

<div
  on:pointerenter={handlePointerEnter}
  on:pointerleave={handlePointerLeave}
  style="position: relative;"
>
  <div bind:this={exportContainer}>
    <slot></slot>
  </div>
  {#if showButtons}
    <div class="overlay" transition:fade>
      <button
        class="button is-dark fade-button"
        on:click={exportComponent}
      >
        Export as PNG
      </button>
    </div>
  {/if}
</div>

<style>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fade-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>