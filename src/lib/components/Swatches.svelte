<script lang="ts">
  import CircularSwatch from "$lib/components/CircularSwatch.svelte";

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
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 10px;
    place-content: center;
    justify-content: center;
    height: 100vh;
    margin-inline: auto;
    max-width: 97vw;
  }
</style>
