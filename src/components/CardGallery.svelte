<script>
  import ExportableOnHover from "./ExportableOnHover.svelte";
  import html2canvas from 'html2canvas';
  import jsPDF from 'jspdf';

  export let cardComponent;
  export let cardStore;
  export let onClickAddCard;
  export let onClickEditCard;
  export let onClickDeleteCard;
  export let style = "width: 320px; height: 480px; max-width: 100%;";

  function handleAdd() {
    if (onClickAddCard) onClickAddCard();
  }

  function handleEdit(uuid) {
    if (onClickEditCard) onClickEditCard(uuid);
  }

  function handleDelete(uuid) {
    if (onClickDeleteCard) onClickDeleteCard(uuid);
  }

  let galleryContainer;
  let isExporting = false;
  let progress = 0;

  async function exportGallery() {
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const pdf = new jsPDF();

    const cardsPerRow = 3;
    const rowsPerPage = 3;
    const cardWidth = pageWidth / cardsPerRow;
    const cardHeight = pageHeight / rowsPerPage;
    const cardsPerPage = cardsPerRow * rowsPerPage;

    let xOffset = 0;
    let yOffset = 0;
    let cardCount = 0;

    isExporting = true;
    progress = 0;

    for (let index = 0; index < $cardStore.length; index++) {
      const card = galleryContainer.querySelector(`[data-uuid="${$cardStore[index].uuid}"]`);
      if (!card) continue;

      const canvas = await html2canvas(card, { backgroundColor: null });
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = cardWidth;
      const imgHeight = cardHeight;

      pdf.addImage(imgData, 'PNG', xOffset, yOffset, imgWidth, imgHeight);

      cardCount++;
      xOffset += imgWidth;

      if (cardCount % cardsPerRow === 0) {
        xOffset = 0;
        yOffset += imgHeight;
      }

      if (cardCount % cardsPerPage === 0 && index !== $cardStore.length - 1) {
        pdf.addPage();
        xOffset = 0;
        yOffset = 0;
      }

      progress = Math.round(((index + 1) / $cardStore.length) * 100);
    }

    pdf.save('gallery_cards.pdf');
    isExporting = false;
  }
</script>

<div class="m-2">
  <button class="button is-dark" on:click={exportGallery} disabled={isExporting}>
    {isExporting ? "Exporting..." : "Download All as PDF"}
  </button>
  {#if isExporting}
    <progress class="progress is-dark mt-2" max="100" value={progress}></progress>
  {/if}
</div>
<div bind:this={galleryContainer} class="is-flex is-flex-wrap-wrap">
  {#if onClickAddCard}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
      class='m-2 button is-dark box is-flex is-justify-content-center is-align-items-center is-size-1'
      {style}
      on:click={handleAdd}
    >
      <div class="has-text-light">
        <iconify-icon icon="mi:add"></iconify-icon>
      </div>
    </div>
  {/if}
  {#each $cardStore as card}
    <div class="m-2" data-uuid={card.uuid}>
      <ExportableOnHover handleEdit={() => handleEdit(card.uuid)} handleDelete={() => handleDelete(card.uuid)} >
        <svelte:component this={cardComponent} {...card} />
      </ExportableOnHover>
    </div>
  {/each}
</div>
