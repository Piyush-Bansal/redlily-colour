<script lang="ts">
  import CircularSwatch from "./CircularSwatch.svelte";

  type Colour = {
    colourName: string;
    colourHex: string;
  };

  interface Props {
    colours: Colour[];
  }

  let { colours }: Props = $props();
</script>

<div class="colour-grid">
  {#each colours as colour (crypto.randomUUID())}
    <CircularSwatch colourName={colour.colourName} colourHex={colour.colourHex}
    ></CircularSwatch>
  {/each}
</div>

<style>
  .colour-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
    place-content: center;
    height: 100vh;
    margin-inline: auto;
    max-width: 60vw;
  }
</style>
