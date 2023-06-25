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
  // import SpikyPit from '../../assets/spiky-pit.svg';
  // import StoneWall from '../../assets/stone-wall.svg';
</script>

<div>
  <div class="columns">
    <div class="column">
      <Grid />
    </div>
    <div class="column">
      <DraggableBank>
        <Draggable><img src={ElfHelmet} style="min-width: 50px; min-height: 50px; background-color: #77b7ec; border-radius: 10px;" /></Draggable>
        <Draggable><img src={Cultist} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={Cultist} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={Cultist} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={OrcHead} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={OrcHead} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={OrcHead} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={CrownedSkull} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={OverlordHelm} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={WoodenCrate} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={WoodenCrate} style="min-width: 50px; min-height: 50px" /></Draggable>
        <Draggable><img src={WoodenCrate} style="min-width: 50px; min-height: 50px" /></Draggable>
      </DraggableBank>
    </div>  
  </div>
</div>