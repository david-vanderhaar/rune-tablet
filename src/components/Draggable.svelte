<script>
	export let left = 100;
	export let top = 100;
	
	let moving = false;
	
	function onMouseDown(e) {
    e.preventDefault();
		moving = true;
	}
	
	function onMouseMove(e) {
    e.preventDefault();
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
	
	function onMouseUp(e) {
    e.preventDefault();
		moving = false;
	}
</script>

<style>
	.draggable {
		user-select: none;
		cursor: move;
		position: absolute;
	}
</style>

<section draggable="false" on:pointerdown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable">
	<slot></slot>
</section>

<svelte:window on:pointerup={onMouseUp} on:pointermove={onMouseMove} />