<script>
  import ColourSwatches from "$lib/components/ColourSwatches.svelte";
  import Toast from "$lib/components/Toast.svelte";

  const colours = [
    {
      colourName: "Cool grey",
      colourHex: "#C2C5C6",
    },
    {
      colourName: "Mocha",
      colourHex: "#6E3C07",
    },
    {
      colourName: "Silver",
      colourHex: "#919191",
    },
    {
      colourName: "Sand",
      colourHex: "#C8BA8F",
    },
    {
      colourName: "Beige",
      colourHex: "#C9C5B1",
    },
  ];
</script>

<ColourSwatches {colours}></ColourSwatches>
<Toast></Toast>
