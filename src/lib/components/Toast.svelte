<script>
  import { fade } from "svelte/transition";
  import { setToast } from "./toastState.svelte";
  import { onDestroy } from "svelte";

  let toastMessage = $state("");

  onDestroy(() => {
    setToast.clearToast();
  });
</script>

{#if setToast.show}
  <div class="toast" transition:fade>
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
    padding: 10px;
    background-color: #333;
    color: #fff;
    border-radius: 48px;
    transform: translateX(-50%);
  }
</style>
