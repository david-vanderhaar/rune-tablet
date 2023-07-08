<script>
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import BeastiaryCard from '../../components/BeastiaryCard.svelte';
  import beastiaryStore from "../../data/beastiary";
  import CardGallery from '../../components/CardGallery.svelte';

  function onClickAddCard() {
    goto('/bestiary/add');
  }
</script>

<section transition:fade>
  <div class="container">
    <CardGallery 
      cardComponent={BeastiaryCard}
      cardStore={beastiaryStore}
      style="width: 480px; height: 320px; max-width: 100%;"
      {onClickAddCard}
    />
  </div>
</section>
