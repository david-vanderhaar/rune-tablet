<script>
  import { base } from "$app/paths";
</script>

<div class="section">
  <div class="columns">
    <aside class="menu column is-one-fifth">
      <p class="menu-label">
        RUNE Tablet
      </p>
      <ul class="menu-list">
        <li><a href="{base}/">About</a></li>
        <li><a href="{base}/character">Character</a></li>
        <li><a href="{base}/cards">Cards</a></li>
        <li><a href="{base}/scenarios">Scenarios</a></li>
      </ul>
    </aside>
    <div class="column">
      <slot></slot>
    </div>
  </div>
</div>

