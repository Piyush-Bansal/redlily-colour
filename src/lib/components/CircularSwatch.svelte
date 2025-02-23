<script>
  import { copy } from "../helper_functions/copy.svelte";
  import { setToast } from "./toastState.svelte";

  let { colourName = "colour name", colourHex = "#ffffff" } = $props();
</script>

<div
  class="swatch"
  role="button"
  onclick={() => {
    copy(colourHex);
    setToast.checkToast(`Copied ${colourName}`);
  }}
  onkeydown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      copy(colourHex);
    }
  }}
  tabindex="0"
>
  <div class="swatch__colour" style:background-color={colourHex}></div>
  <div class="colour-name"><p>{colourName}</p></div>
</div>

<style>
  .swatch {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;

    cursor: pointer;
    transition: transform 0.1s ease-in-out;
  }

  .swatch:active {
    transform: scale(0.9);
  }

  .swatch__colour {
    align-self: center;
    height: 80px;
    width: 80px;
    border-radius: 100%;
    border: 1px solid rgb(0 0 0 / 20%);
  }

  .colour-name {
    text-align: center;
  }

  :global(p) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
</style>
