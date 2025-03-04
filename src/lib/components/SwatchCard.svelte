<script lang="ts">
  import type { SubColour } from "$lib/types/typeDefinitions";
  import SwatchColour from "./SwatchColour.svelte";

  interface props {
    subColours: SubColour[];
  }

  let { subColours }: props = $props();
</script>

{#each subColours as subColour}
  <SwatchColour {subColour}></SwatchColour>
{/each}
