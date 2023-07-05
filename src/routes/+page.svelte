<script>
  import { fade } from 'svelte/transition';
  import { base } from "$app/paths";
</script>
<div transition:fade class='container'>
  <p>This is a set of tools to help creators enjoy and develop third-party content for RUNE, <a target="_blank" href="https://gilarpgs.itch.io/rune">"a solo tabletop RPG inspired by the soulslike genre of video games"</a>.</p>
  <br>
  <p><a href="{base}/equipment">Create custom equipment</a> cards and export them as PNGs.</p>
  <p><a href="{base}/bestiary">Create custom creature</a> cards.</p>
  <p><a href="{base}/play">Play out RUNE combat</a> on a drag and drop grid.</p>

  <br>
  <br>
  <p class="is-italic">This was created for the RUNE RPG by <a target="_blank" href="https://gilarpgs.com/">Gila RPGs</a>. This product is not affiliated with Gila RPGs, or Spencer Campbell, in any way. I did not create RUNE. I am simply inspired by it.</p>
</div>
