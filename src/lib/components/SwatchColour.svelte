<script module>
  let current: string | null = $state(null);
  let isHovered: boolean = $state(false);
</script>

<script lang="ts">
  import { copy } from "$lib/helper_functions/copy.svelte";
  import type { SubColour } from "$lib/types/typeDefinitions";
  import colorContrast from "color-contrast";
  import { setToast } from "$lib/state/toastState.svelte";
  import { fade } from "svelte/transition";

  type Props = {
    subColour: SubColour;
  };

  let { subColour }: Props = $props();
  let contrastCheck =
    colorContrast(subColour.code, "#000000") > 4.5 ? true : false;
</script>

<div
  style:background-color={subColour.code}
  class={{
    colour__wrapper: true,
    "white-text": !contrastCheck,
  }}
  role="button"
  tabindex="0"
  onclick={(e) => {
    copy(subColour.code);
    setToast.checkToast(
      `${subColour.colour} copied`,
      subColour.code,
      contrastCheck ? "black" : "white"
    );
  }}
  onkeydown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      copy(subColour.code);
      setToast.checkToast(
        `${subColour.colour} copied`,
        subColour.code,
        contrastCheck ? "black" : "white"
      );
    }
  }}
  onmouseenter={() => {
    current = subColour.code;
    isHovered = true;
  }}
  onmouseleave={() => {
    current = null;
    isHovered = false;
  }}
>
  <p class="colour__name">
    {subColour.colour}
    {#if subColour.colour === "Red 2"}
      (Main)
    {/if}
  </p>

  {#if current === subColour.code && isHovered}
    <p class="colour__code" transition:fade={{ duration: 150 }}>
      {subColour.code}
    </p>
  {/if}
  {#if current !== subColour.code && isHovered}
    <div class="overlay" transition:fade={{ duration: 150 }}></div>
  {/if}
</div>

<style lang="scss">
  .colour {
    &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 14.4vw;
      position: relative;

      padding: 12px;
      cursor: pointer;

      & p {
        white-space: nowrap;
      }
    }
  }

  .white-text {
    color: #fff;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  }
</style>
