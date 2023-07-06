<script>
  import { fade } from 'svelte/transition';
  import gearStore from "../../data/gear";
  import EquipmentCard from '../../components/EquipmentCard.svelte';

</script>

<section transition:fade>
  <div class="container">
    <div class="is-flex is-flex-wrap-wrap">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div 
        class='m-2 box is-outlined is-secondary'
        style="width: 400px; height: 600px; max-width: 100%;"
        on:click={handleShowForm}
      >
        <div class="has-text-grey">
          +
        </div>
      </div>
      {#each $gearStore as gear}
        <div class='m-2' style="width: 400px; height: 600px; max-width: 100%;">
          <EquipmentCard {...gear} />
        </div>
      {/each}
    </div>
  </div>
</section>
