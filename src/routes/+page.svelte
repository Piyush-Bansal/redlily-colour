<script>
  import RoundSwatches from "$lib/RoundSwatches.svelte";
  import Toast from "$lib/Toast.svelte";

  const colours = [
    {
      colourName: "Carmine red",
      colourHex: "#910917",
    },
    {
      colourName: "Gold",
      colourHex: "#D5B549",
    },
    {
      colourName: "Rose gold",
      colourHex: "#EFCABE",
    },
    {
      colourName: "Night",
      colourHex: "#131217",
    },
    {
      colourName: "White",
      colourHex: "#FFFFFF",
    },
  ];
</script>

<RoundSwatches {colours}></RoundSwatches>
<Toast></Toast>
