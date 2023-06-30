<script>
  import { fade } from "svelte/transition";
  import Grid from "../../components/Grid.svelte";
  import Draggable from "../../components/Draggable.svelte";
  import DraggableBank from "../../components/DraggableBank.svelte";
  import Cultist from '../../assets/cultist.svg';
  import ElfHelmet from '../../assets/elf-helmet.svg';
  import OrcHead from '../../assets/orc-head.svg';
  import WoodenCrate from '../../assets/wooden-crate.svg';
  import CrownedSkull from '../../assets/crowned-skull.svg';
  import OverlordHelm from '../../assets/overlord-helm.svg';
  // import DwarfSvg from "../../assets/dwarf-helmet_1.svg";
  // import SpikyPit from '../../assets/spiky-pit.svg';
  // import StoneWall from '../../assets/stone-wall.svg';
  import EnemyDraggable from "../../components/EnemyDraggable.svelte";
  import CardTemplateSelectorFullWidth from "../../components/CardTemplateSelectorFullWidth.svelte";
  import beastiaryStore from "../../data/beastiary";
  import gearStore from "../../data/gear";
  import EquipmentCard from "../../components/EquipmentCard.svelte";
  import Resizable from "../../components/Resizable.svelte";
  import Dice from "../../components/Dice.svelte";

  let pinnedCards = [];
  function onTemplateSelect(templateCard) {
    pinnedCards = [templateCard, ...pinnedCards].slice(0, 2);
  }

  let dice = [1, 1]
  function addDie() {
    dice = [...dice, 1];
  }

  $: templateCards = [...$beastiaryStore, ...$gearStore];
</script>

<div id="play-page">
  <div class="columns">
    <div class="column" id="grid-container">
      <Grid />
    </div>
    <div class="column">
      <DraggableBank>
        <EnemyDraggable iconImageSrc={ElfHelmet} backgroundColor="#77b7ec" />
        <EnemyDraggable iconImageSrc={Cultist} />
        <EnemyDraggable iconImageSrc={Cultist} />
        <EnemyDraggable iconImageSrc={Cultist} />
        <EnemyDraggable iconImageSrc={OrcHead} />
        <EnemyDraggable iconImageSrc={OrcHead} />
        <EnemyDraggable iconImageSrc={OrcHead} />
        <EnemyDraggable iconImageSrc={CrownedSkull} />
        <EnemyDraggable iconImageSrc={OverlordHelm} />
        <EnemyDraggable iconImageSrc={WoodenCrate} />
        <EnemyDraggable iconImageSrc={WoodenCrate} />
        <EnemyDraggable iconImageSrc={WoodenCrate} />
      </DraggableBank>

      <br>
      <div class="is-flex is-align-items-center" style="height: 40px;">
        {#each dice as die}
          <Dice />
        {/each}
        <button class="button is-dark ml-3 mt-2" style="height: 35px; width: 35px;" on:click={addDie}>
          <iconify-icon icon="mi:add"></iconify-icon>
        </button>
      </div>
      <br>
      <CardTemplateSelectorFullWidth label={"pin template cards"} {templateCards} onSelect={onTemplateSelect} />
      <div class="is-flex is-flex-direction-column is-align-items-center is-justify-content-start">
        {#each pinnedCards as pinnedCard (pinnedCard.title)}
          <!-- <Draggable> -->
            <!-- <Resizable> -->
              <div style="width: 400px; height: 600px; max-width: 100%;" transition:fade>
                <EquipmentCard {...pinnedCard} />
              </div>
            <!-- </Resizable> -->
          <!-- </Draggable> -->
        {/each}
      </div>
    </div>  
  </div>
</div>
