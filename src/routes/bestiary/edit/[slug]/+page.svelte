<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { toast } from '@zerodevx/svelte-toast';
  import beastiaryStore from '../../../../data/beastiary';
  import BestiaryForm from '../../../../components/BestiaryForm.svelte';


  export let data;
  let card;

  onMount(() => {
    card = beastiaryStore.getById(data.uuid);
    
    if (!card) {
      goto(`${base}/bestiary`);
      toast.push('No card found with that ID');
    }
  })
</script>

<section transition:fade>
  {#if !card}
    <div>Loading...</div>
  {:else}
    <BestiaryForm {...card} editMode />
  {/if}
</section>
