<script>
  import ActionDisplay from "./ActionDisplay.svelte";
  import extraEffectStore from "../data/extraEffects";

  export let title = '';
  export let health = '';
  export let stamina = '';
  export let itemTags = [];
  export let range = [];
  export let flavorText = '';
  export let extraText = '';
  export let actions = [];

  const extraEffects = extraEffectStore.getExtraEffects();
  let allUniqueExtraEffects = [];
  function getAllUniqueExtraEffectsFromActions() {
    let allExtraEffects = actions.reduce((acc, action) => {
      return [...acc, ...action.extraEffects];
    }, []);

    allUniqueExtraEffects = [...new Set(allExtraEffects)];
  }

  $: {
    getAllUniqueExtraEffectsFromActions();
    actions;
  }

  function getHealthAndStamina(health, stamina) {
    const result = [];
    if (health && health.length > 0) result.push(`Health: ${health}`);
    if (stamina && stamina.length > 0) result.push(`Stamina: ${stamina}`);
    return result.join(', ');
  };

</script>

<!-- <div style="width: 400px; height: 600px; max-width: 100%;"> -->
<div style="width: 320px; height: 480px; max-width: 100%;">
  <div class="card equipment-card">
    <div class="card-content has-text-centered pb-0" style="background-color: white;">
      <p class="title">{title}</p>
      <div class="is-size-6 subtitle">
        <p>{getHealthAndStamina(health, stamina)}</p>
        <p>{itemTags && itemTags.join(', ')}</p>
        {#if range && range && range.length > 0}
          <p>Range: {range.join(', ')}</p>
        {/if}
      </div>
      <hr class="my-1" />
      <div class="content">
        {#each actions as action (action)}
          <ActionDisplay {action}/>
        {/each}
        <div class="bottom-content" style="background-color: white;">
          <hr class="my-1" />
          {#each allUniqueExtraEffects as extraEffect}
            {#if extraEffects[extraEffect]}
              <p><em>{extraEffect}</em>: {extraEffects[extraEffect]}</p>
            {/if}
          {/each}
          <p class="has-text-centered">{extraText}</p>
          <p class="has-text-grey is-italic has-text-centered">{flavorText}</p>
        </div>
      </div>
    </div>
  </div>
</div>
<style>
  .equipment-card {
    height: 100%;
    width: 100%;
    border: black 11px double;
  }

  .bottom-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 1.5rem 1.5rem 1.5rem;
    width: 100%;
  }

  .card-content {
    height: 100%;
  }
</style>
