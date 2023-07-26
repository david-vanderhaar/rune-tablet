<script>
  import { toast } from "@zerodevx/svelte-toast";

  export let handleDelete;

  function onDelete() {
    toast.pop();
    if (handleDelete) handleDelete();
  }

  function onCancel() { toast.pop(); }
</script>

<div class="card">
  <div class="card-content">
    <div class="content">
      Are you sure you want to delete this card?
    </div>
  </div>
  <footer class=" is-flex">
    <button on:click={onDelete} class="card-footer-item button is-small is-danger">Delete</button> 
    <button on:click={onCancel} class="card-footer-item button is-small is-light">Cancel</button> 
  </footer>
</div>
