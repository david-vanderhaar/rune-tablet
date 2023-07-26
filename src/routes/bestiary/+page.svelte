<script>
  import { toast } from '@zerodevx/svelte-toast';
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import BeastiaryCard from '../../components/BeastiaryCard.svelte';
  import beastiaryStore from "../../data/beastiary";
  import CardGallery from '../../components/CardGallery.svelte';
  import DeleteConfirmation from '../../components/DeleteConfirmation.svelte';

  function onClickAddCard() {
    goto(`${base}/bestiary/add`)
  }

  function onClickEditCard(uuid) {
    goto(`${base}/bestiary/edit/${uuid}`)
  }

  function deleteCard(uuid) {
    beastiaryStore.delete(uuid);
    toast.push('Card deleted');
  }

  function onClickDeleteCard(uuid) {
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
      cardComponent={BeastiaryCard}
      cardStore={beastiaryStore}
      style="width: 480px; height: 320px; max-width: 100%;"
      {onClickAddCard}
      {onClickEditCard}
      {onClickDeleteCard}
    />
  </div>
</section>
