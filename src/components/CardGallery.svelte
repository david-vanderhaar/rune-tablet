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

  function exportGallery() {
    const cards = galleryContainer.children;
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const pdf = new jsPDF();

    // Correctly calculate card dimensions to fit 3x3 grid
    const cardsPerRow = 3;
    const rowsPerPage = 3;
    const cardWidth = pageWidth / cardsPerRow; // Divide page width into 3 equal parts
    const cardHeight = pageHeight / rowsPerPage; // Divide page height into 3 equal parts
    const cardsPerPage = cardsPerRow * rowsPerPage;

    let xOffset = 0;
    let yOffset = 0;
    let cardCount = 0;

    Array.from(cards).forEach((card, index) => {
      html2canvas(card, { backgroundColor: null }).then(canvas => {
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

        if (cardCount % cardsPerPage === 0 && index !== cards.length - 1) {
          pdf.addPage();
          xOffset = 0;
          yOffset = 0;
        }

        if (index === cards.length - 1) {
          pdf.save('gallery_cards.pdf');
        }
      });
    });
  }
</script>

<div class="m-2">
  <button class="button is-dark" on:click={exportGallery}>
    Download All as PDF
  </button>
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
    <div class="m-2">
      <ExportableOnHover handleEdit={() => handleEdit(card.uuid)} handleDelete={() => handleDelete(card.uuid)} >
        <svelte:component this={cardComponent} {...card} />
      </ExportableOnHover>
    </div>
  {/each}
</div>
