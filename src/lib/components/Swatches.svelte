<script lang="ts">
  import type { Colours } from "$lib/types/typeDefinitions";
  import SwatchCard from "./SwatchCard.svelte";

  type Parameters = {
    colours: Colours;
  };

  let { colours }: Parameters = $props();
</script>

<div class="wrapper">
  <div class="swatch__cards">
    {#each colours as colour}
      <div class="swatch">
        <SwatchCard subColours={colour.subColor}></SwatchCard>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .swatch {
    &__cards {
      display: flex;
      flex-direction: row;
    }
    transition: margin-left 0.3s ease-in-out;

    &:not(:first-child) {
      margin-left: -9.8%;
    }
    &:hover + .swatch {
      margin-left: 0;
    }
  }

  .wrapper {
    width: 90vw;
    margin-inline: auto;
    overflow-x: hidden;
  }
</style>
