<script>
  import RoundSwatches from "$lib/components/ColourSwatches.svelte";
  import Toast from "$lib/components/Toast.svelte";

  const colours = [
    {
      colourName: "Green",
      colourHex: "#689D5A",
    },
    {
      colourName: "Blue",
      colourHex: "#536298",
    },
    {
      colourName: "Purple",
      colourHex: "#582F81",
    },
    {
      colourName: "Magenta",
      colourHex: "#B9639E",
    },
    {
      colourName: "Pink",
      colourHex: "#E13A5D",
    },
  ];
</script>

<RoundSwatches {colours}></RoundSwatches>
<Toast></Toast>
