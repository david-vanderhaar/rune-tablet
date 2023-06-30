<script>
  let scale = 1;

  function handleResize(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    scale = parseFloat(event.target.value);
  }
</script>

<style>
  .resizable-content {
    transform-origin: top left;
    padding: 10px;
    overflow: auto;
  }

  input[type=range] {
    z-index: 100;
  }
</style>

<div>
  <input type="range" min="0.1" max="1" step="0.1" bind:value={scale} on:input={handleResize} />
  <div class="resizable-content" style={`transform: scale(${scale})`}>
    <slot></slot>
  </div>
</div>

