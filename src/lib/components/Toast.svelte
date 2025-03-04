<script>
  import { fade } from "svelte/transition";
  import { setToast } from "../state/toastState.svelte";
  import { onDestroy } from "svelte";

  onDestroy(() => {
    setToast.clearToast();
  });
</script>

{#if setToast.show}
  <div
    class="toast"
    transition:fade={{ duration: 150 }}
    style="background-color: {setToast.backgroundColor}; color: {setToast.textColour}"
  >
    <div class="toast__message">
      <p>{setToast.message}</p>
    </div>
  </div>
{/if}

<style>
  .toast {
    position: fixed;
    bottom: 10px;
    left: 50%;
    padding: 8px 12px;
    background-color: #333;
    color: #fff;
    border-radius: 48px;
    transform: translateX(-50%);
  }
</style>
