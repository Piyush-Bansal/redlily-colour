<script lang="ts">
  import type { Colours } from "$lib/types/typeDefinitions";
  import SwatchCard from "./SwatchCard.svelte";
  import { swatchState } from "$lib/state/swatch.svelte";
  import colorContrast from "color-contrast";

  type Parameters = {
    colours: Colours;
  };

  let { colours }: Parameters = $props();
</script>

<svelte:body onclick={() => (swatchState.current = null)} />

<div class="wrapper">
  <div class="swatch__cards">
    {#each colours as colour}
      <div
        class="swatch"
        class:selected={swatchState.current === colour.colourName}
        role="presentation"
        onclick={(e) => {
          e.stopPropagation();
          swatchState.current = colour.colourName;
        }}
      >
        <SwatchCard subColours={colour.subColor}></SwatchCard>
        <div
          class="swatch__cover"
          style:--background-color={colour.colourHex}
          style:--text-color={colorContrast(colour.colourHex, "#000000") > 4.5
            ? "#000000"
            : "#ffffff"}
        >
          <h2>{colour.colourName}</h2>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .swatch {
    transition:
      margin-left 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    &__cards {
      display: flex;
      flex-direction: row;

      transform: translateY(120%);
    }

    &:not(:first-child) {
      margin-left: -9.8%;
    }

    &:hover:not(.selected) + .swatch {
      margin-left: 0;
    }

    &.selected {
      transform: translateY(-110%);
    }

    &__cover {
      width: 14.4vw;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;

      display: flex;
      align-items: flex-end;
      padding: 24px;
      background-color: var(--background-color);
      color: var(--text-color);

      cursor: pointer;

      & h2 {
        font-size: 32px;
        line-height: 30px;
        white-space: nowrap;

        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
  }

  :global(.swatch:has(+ .swatch.selected)) {
    margin-left: 0;
  }

  .wrapper {
    height: 100vh;
    overflow-y: hidden;
    width: 90vw;
    margin-inline: auto;
  }
</style>
