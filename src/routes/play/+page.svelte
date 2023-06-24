<script>
  import Grid from "../../components/Grid.svelte";
  import DwarfSvg from "../../assets/dwarf-helmet.svg";
  import Draggable from "../../components/Draggable.svelte";
</script>

<div>
  <Grid />
  <Draggable>
    <div>
      <img src={DwarfSvg} height="50px" width="50px" />
    </div>
  </Draggable>
</div>