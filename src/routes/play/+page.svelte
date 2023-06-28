<script>
  import Grid from "../../components/Grid.svelte";
  import Draggable from "../../components/Draggable.svelte";
  import DraggableBank from "../../components/DraggableBank.svelte";
  import Cultist from '../../assets/cultist.svg';
  import ElfHelmet from '../../assets/elf-helmet.svg';
  import OrcHead from '../../assets/orc-head.svg';
  import WoodenCrate from '../../assets/wooden-crate.svg';
  // import DwarfSvg from "../../assets/dwarf-helmet_1.svg";
  import CrownedSkull from '../../assets/crowned-skull.svg';
  import OverlordHelm from '../../assets/overlord-helm.svg';
    import EnemyDraggable from "../../components/EnemyDraggable.svelte";
  // import SpikyPit from '../../assets/spiky-pit.svg';
  // import StoneWall from '../../assets/stone-wall.svg';
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
    </div>  
  </div>
</div>

<style>
  /* #grid-container { */
  /* #play-page {
    overscroll-behavior: none;
    touch-action: none;
  } */
</style>