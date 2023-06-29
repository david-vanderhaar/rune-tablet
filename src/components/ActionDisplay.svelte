<script>
  import { getNumberAsDie } from "../data/triggers";
  export let action = null
  export let stacked = false
  const {triggers, actionEffect, extraEffects} = action

</script>

<div class='mb-4'>
  <div class="is-flex is-align-items-center is-justify-content-space-between" class:is-flex-direction-column="{stacked}">
    {#if triggers.length > 0}
      <span style="font-size: 48px; line-height: 1;" >{triggers.map((item) => getNumberAsDie(item)).join('')}</span> 
    {/if}
    <span class="is-flex-grow-1" class:ml-4="{!stacked}" style="text-align: center">
      <div>{actionEffect}</div>
      <div><em>{extraEffects.join(', ')}</em></div>
    </span>
  </div>
</div>

