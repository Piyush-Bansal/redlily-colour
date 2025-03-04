<script lang="ts">
  import { copy } from "$lib/helper_functions/copy.svelte";
  import type { SubColour } from "$lib/types/typeDefinitions";
  import colorContrast from "color-contrast";
  import { setToast } from "$lib/state/toastState.svelte";

  type Props = {
    subColour: SubColour;
  };

  let { subColour }: Props = $props();
  let contrastCheck =
    colorContrast(subColour.code, "#000000") > 4.5 ? true : false;
</script>

<div
  style:background-color={subColour.code}
  class={{ colour__wrapper: true, "white-text": !contrastCheck }}
  onclick={() => {
    copy(subColour.code);
    setToast.checkToast(
      `${subColour.colour} copied`,
      subColour.code,
      contrastCheck ? "black" : "white"
    );
  }}
>
  <p class="colour__name">
    {subColour.colour}
    {#if subColour.colour === "Red 2"}
      (Main)
    {/if}
  </p>
  <p class="colour__code">{subColour.code}</p>
</div>

<style lang="scss">
  .colour {
    &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 15vw;

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
</style>
