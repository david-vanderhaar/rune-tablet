<script>
  import { onMount } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';

  export let left = 0;
	export let top = 0;
	
  let id = uuidv4();
  let visibility = 'hidden';
	let moving = false;
  let position = 'initial';

  function centerOnPointer(event) {
    const draggable = document.getElementById(id);
    left = event.clientX - draggable.getBoundingClientRect().width / 4;
    top = event.clientY - draggable.getBoundingClientRect().height / 4;
  }

  function isMobile() {
    return window.innerWidth < 768;
  }

	function handlePointerDown(e) {
    e.preventDefault();
		moving = true;

    if (isMobile()) return
    centerOnPointer(e);
	}
	
	function handleWindowPointerMove(e) {
    e.preventDefault();
		if (moving) {
			left += e.movementX;
			top += e.movementY;
      if (position === 'initial') {
        position = 'absolute';
      }
		}

	}
	
	function handleWindowPointerUp(e) {
    e.preventDefault();
		moving = false;
	}

  // on mount move this element to it's parent element using left and top
  onMount(() => {
    const draggable = document.getElementById(id);
    const parent = draggable.parentElement;
    const parentRect = parent.getBoundingClientRect();
    // const draggableRect = draggable.getBoundingClientRect();
    const startLeft = parentRect.left;
    const startTop = parentRect.top;
    draggable.style.left = `${startLeft}px`;
    draggable.style.top = `${startTop}px`;

    left = startLeft;
    top = startTop;

    visibility = 'visible';
  });
</script>

<style>
	.draggable {
		user-select: none;
		cursor: move;
    overscroll-behavior: none;
    touch-action: none;
	}
</style>

<section 
  style="left: {left}px; top: {top}px; visibility: {visibility}; position: {position};"
  on:pointerdown={handlePointerDown}
  draggable="false"
  class="draggable"
  {id}
>
  <slot></slot>
</section>

<svelte:window 
  on:pointerup={handleWindowPointerUp}
  on:pointermove={handleWindowPointerMove}
/>