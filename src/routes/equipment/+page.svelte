<script>
  import { toast } from '@zerodevx/svelte-toast';
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import EquipmentCard from '../../components/EquipmentCard.svelte';
  import gearStore from "../../data/gear";
  import CardGallery from '../../components/CardGallery.svelte';
  import DeleteConfirmation from '../../components/DeleteConfirmation.svelte';

  function onClickAddCard() {
    goto(`${base}/equipment/add`);
  }

  function onClickEditCard(uuid) {
    goto(`${base}/equipment/edit/${uuid}`)
  }

  function deleteCard(uuid) {
    gearStore.delete(uuid);
    toast.push('Card deleted');
  }

  function onClickDeleteCard(uuid) {
    const message = 'Are you sure you want to delete this card?'
    toast.push({
      component: {
        src: DeleteConfirmation,
        props: {handleDelete: () => deleteCard(uuid)},
        sendIdTo: 'toastId'
      },
      dismissable: false,
      initial: 0,
      theme: {
        '--toastPadding': '0',
        '--toastMsgPadding': '0'
      }
    })
  }

</script>

<section transition:fade>
  <div class="container">
    <CardGallery 
      cardComponent={EquipmentCard}
      cardStore={gearStore}
      {onClickAddCard} 
      {onClickEditCard}
      {onClickDeleteCard}
    />
  </div>
</section>
