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

  function getHealthAndStamina (health, stamina) {
    const result = [];
    if (health && health.length > 0) result.push(`Health: ${health}`);
    if (stamina && stamina.length > 0) result.push(`Stamina: ${stamina}`);
    return result.join(', ');
  };

  $: {
    getAllUniqueExtraEffectsFromActions();
    actions;
  }


</script>
<div style="width: 600px; height: 400px; max-height: 100%;">
  <div class="card display-card">
    <div class="card-content pb-0" style="background-color: white;">
      <div class="is-flex is-justify-content-space-between">
        <p class="title">{title}</p>
        <div class="is-size-6 has-text-left">
          <p>{getHealthAndStamina(health, stamina)}</p>
          <p>{itemTags && itemTags.join(', ')}</p>
          {#if range && range.length > 0}
            <p>Range: {range.join(', ')}</p>
          {/if}
        </div>
      </div>
      <hr />
      <div class="content">
        <div class="is-flex is-justify-content-space-around">
          {#each actions as action (action)}
            <ActionDisplay {action} stacked/>
          {/each}
        </div>
        <div class="bottom-content" style="background-color: white;">
          <hr />
          <div class="is-flex is-justify-content-space-around">
            <div>
              {#each allUniqueExtraEffects as extraEffect}
                {#if extraEffects[extraEffect]}
                  <p><em>{extraEffect}</em>: {extraEffects[extraEffect]}</p>
                {/if}
              {/each}
            </div>
            <div>
              <p class="has-text-centered">{extraText}</p>
            </div>
            <div>
              <p class="has-text-grey is-italic has-text-centered">{flavorText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .display-card {
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
</style>
