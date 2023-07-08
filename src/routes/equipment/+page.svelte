<script>
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import EquipmentCard from '../../components/EquipmentCard.svelte';
  import gearStore from "../../data/gear";
  import CardGallery from '../../components/CardGallery.svelte';

  function onClickAddCard() {
    goto('/equipment/add');
  }
</script>

<section transition:fade>
  <div class="container">
    <CardGallery cardComponent={EquipmentCard} cardStore={gearStore} {onClickAddCard} />
  </div>
</section>
