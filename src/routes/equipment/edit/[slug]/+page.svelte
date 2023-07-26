<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { toast } from '@zerodevx/svelte-toast';
  import gearStore from "../../../../data/gear";
  import GearForm from '../../../../components/GearForm.svelte';


  export let data;
  let card;

  onMount(() => {
    card = gearStore.getById(data.uuid);
    
    if (!card) {
      goto(`${base}/equipment`);
      toast.push('No card found with that ID');
    }
  })
</script>

<section transition:fade>
  {#if !card}
    <div>Loading...</div>
  {:else}
    <GearForm {...card} editMode />
  {/if}
</section>
