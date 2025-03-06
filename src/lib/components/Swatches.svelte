<script lang="ts">
  import type { Colours } from "$lib/types/typeDefinitions";
  import SwatchCard from "./SwatchCard.svelte";
  import { swatchState } from "$lib/state/swatch.svelte";
  import colorContrast from "color-contrast";

  type Parameters = {
    colours: Colours;
  };

  let { colours }: Parameters = $props();
  let wrapper: HTMLDivElement | undefined = $state();

  setTimeout(() => {
    if (wrapper) {
      wrapper.classList.remove("hidden");
      wrapper.classList.add("fade-in");
    }
  }, 600);
</script>

<svelte:body onclick={() => (swatchState.current = null)} />

<div class="wrapper hidden" bind:this={wrapper}>
  <div class="swatch__cards">
    {#each colours as colour}
      <div
        class="swatch"
        class:selected={swatchState.current === colour.colourName}
        class:unselected={swatchState.current !== colour.colourName}
        role="presentation"
        onclick={(e) => {
          e.stopPropagation();
          swatchState.current = colour.colourName;
        }}
      >
        <!-- Front div   -->
        <div
          class="swatch__cover"
          style:--background-color={colour.colourHex}
          style:--text-color={colorContrast(colour.colourHex, "#131217") > 4.5
            ? "#131217"
            : "#ffffff"}
        >
          <h2>{colour.colourName}</h2>
        </div>

        <!-- Back div   -->
        <div class="swatch__back">
          <div class="back-content-wrapper">
            <SwatchCard subColours={colour.subColor}></SwatchCard>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .swatch {
    transition: margin-left 0.3s ease-in-out;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    width: 14.4vw;
    height: 240px;
    transform-style: preserve-3d;

    &__cards {
      display: flex;
      flex-direction: row;
      perspective: 1000px;
      transform: translateY(120%);
    }

    &:not(:first-child) {
      margin-left: -9.8%;
    }

    &:hover:not(.selected) + .swatch {
      margin-left: 0;
    }

    &.selected {
      animation: reveal-cards 0.7s ease-in-out forwards;

      .swatch__cover {
        /* Hide front face when card is selected */
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
        transition-delay: 0.4s;
      }

      .swatch__back {
        /* Show back face when card is selected */
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.2s;
        transition-delay: 0.4s;
      }
    }

    &.unselected {
      animation: hide-cards 0.6s ease-in-out forwards;

      .swatch__cover {
        /* Show front face when card is unselected - faster transition */
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.15s;
        /* Reduced delay for faster appearance */
        transition-delay: 0.2s;
      }

      .swatch__back {
        /* Hide back face when card is unselected - faster transition */
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.15s;
        /* No delay for faster disappearance */
      }
    }

    &__cover {
      display: flex;
      align-items: flex-end;
      padding: 24px;
      background-color: var(--background-color);
      color: var(--text-color);
      z-index: 2;
      cursor: pointer;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      opacity: 1;
      transition: opacity 0.3s;

      & h2 {
        font-size: 32px;
        line-height: 30px;
        white-space: nowrap;

        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }

    &__back {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      opacity: 0;
      transition: opacity 0.3s;
      background-color: white;
    }

    /* Add a wrapper for back content to fix mirroring */
    .back-content-wrapper {
      width: 100%;
      height: 100%;
      /* This transform counters the parent's rotation to fix mirroring */
      transform: scaleX(-1);
    }
  }

  .wrapper {
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    width: 90vw;
    margin-inline: auto;
  }

  @keyframes reveal-cards {
    0% {
      transform: translateY(0) rotateY(0turn);
    }
    50% {
      transform: translateY(-110%) rotateY(0turn);
    }
    100% {
      transform: translateY(-110%) rotateY(0.5turn);
    }
  }

  @keyframes hide-cards {
    0% {
      transform: translateY(-110%) rotateY(0.5turn);
    }
    50% {
      transform: translateY(-110%) rotateY(0turn);
    }
    100% {
      transform: translateY(0) rotateY(0turn);
    }
  }

  .hidden {
    visibility: hidden;
  }
</style>
