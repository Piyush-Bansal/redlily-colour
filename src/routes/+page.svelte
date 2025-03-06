<script lang="ts">
  import Swatches from "$lib/components/Swatches.svelte";
  import Toast from "$lib/components/Toast.svelte";
  import type { Colours } from "$lib/types/typeDefinitions";
  import "$lib/main.css";

  const colours: Colours = [
    {
      colourName: "Red",
      colourHex: "#910917",
      subColor: [
        { colour: "Red 0", code: "#fa7d7d" },
        { colour: "Red 1", code: "#c53f46" },
        { colour: "Red 2", code: "#910917" },
        { colour: "Red 3", code: "#68000c" },
        { colour: "Red 4", code: "#400007" },
        { colour: "Red 5", code: "#170104" },
      ],
    },
    {
      colourName: "Gold",
      colourHex: "#D5B549",
      subColor: [
        { colour: "Gold 0", code: "#fae17d" },
        { colour: "Gold 1", code: "#f3da71" },
        { colour: "Gold 2", code: "#e9cd60" },
        { colour: "Gold 3", code: "#d5b549" },
        { colour: "Gold 4", code: "#b9943b" },
        { colour: "Gold 5", code: "#8c6c2a" },
      ],
    },
    {
      colourName: "Rose gold",
      colourHex: "#EFCABE",
      subColor: [
        { colour: "Rose Gold 0", code: "#f0dbd5" },
        { colour: "Rose Gold 1", code: "#efcabe" },
        { colour: "Rose Gold 2", code: "#edbaab" },
        { colour: "Rose Gold 3", code: "#e7ae9c" },
        { colour: "Rose Gold 4", code: "#ce9786" },
        { colour: "Rose Gold 5", code: "#9c7164" },
      ],
    },
    {
      colourName: "Cool Grey",
      colourHex: "#131217",
      subColor: [
        { colour: "Cool Grey 0", code: "#edf1f2" },
        { colour: "Cool Grey 1", code: "#c2c5c6" },
        { colour: "Cool Grey 2", code: "#96999b" },
        { colour: "Cool Grey 3", code: "#6b6c6f" },
        { colour: "Cool Grey 4", code: "#3e3e43" },
        { colour: "Cool Grey 5", code: "#131217" },
      ],
    },
    {
      colourName: "Green",
      colourHex: "#689D5A",
      subColor: [
        { colour: "Green 0", code: "#6ccc6c" },
        { colour: "Green 1", code: "#6ebf6a" },
        { colour: "Green 2", code: "#689d5a" },
        { colour: "Green 3", code: "#536e41" },
        { colour: "Green 4", code: "#3f4c2e" },
        { colour: "Green 5", code: "#364026" },
      ],
    },
    {
      colourName: "Blue",
      colourHex: "#536298",
      subColor: [
        { colour: "Blue 0", code: "#708ee6" },
        { colour: "Blue 1", code: "#667cc2" },
        { colour: "Blue 2", code: "#536298" },
        { colour: "Blue 3", code: "#3a4266" },
        { colour: "Blue 4", code: "#141623" },
        { colour: "Blue 5", code: "#0f0f19" },
      ],
    },
    {
      colourName: "Purple",
      colourHex: "#582F81",
      subColor: [
        { colour: "Purple 0", code: "#6324b5" },
        { colour: "Purple 1", code: "#6b3caa" },
        { colour: "Purple 2", code: "#582f81" },
        { colour: "Purple 3", code: "#361d4a" },
        { colour: "Purple 4", code: "#190e21" },
        { colour: "Purple 5", code: "#0e0712" },
      ],
    },
    {
      colourName: "Magenta",
      colourHex: "#B9639E",
      subColor: [
        { colour: "Magenta 0", code: "#ff99e0" },
        { colour: "Magenta 1", code: "#ec85cd" },
        { colour: "Magenta 2", code: "#b9639e" },
        { colour: "Magenta 3", code: "#733b61" },
        { colour: "Magenta 4", code: "#402035" },
        { colour: "Magenta 5", code: "#2e1724" },
      ],
    },
    {
      colourName: "Pink",
      colourHex: "#E13A5D",
      subColor: [
        { colour: "Pink 0", code: "#ff4567" },
        { colour: "Pink 1", code: "#e13a5d" },
        { colour: "Pink 2", code: "#c32b57" },
        { colour: "Pink 3", code: "#a51a51" },
        { colour: "Pink 4", code: "#870a45" },
        { colour: "Pink 5", code: "#690034" },
      ],
    },
    {
      colourName: "Mocha",
      colourHex: "#6E3C07",
      subColor: [
        { colour: "Mocha 0", code: "#ed8c47" },
        { colour: "Mocha 1", code: "#be6c2d" },
        { colour: "Mocha 2", code: "#915016" },
        { colour: "Mocha 3", code: "#6e3c07" },
        { colour: "Mocha 4", code: "#55310a" },
        { colour: "Mocha 5", code: "#4a2d0f" },
      ],
    },
    {
      colourName: "Silver",
      colourHex: "#919191",
      subColor: [
        { colour: "Silver 0", code: "#d9d9d9" },
        { colour: "Silver 1", code: "#b5b5b5" },
        { colour: "Silver 2", code: "#919191" },
        { colour: "Silver 3", code: "#6e6e6e" },
        { colour: "Silver 4", code: "#4a4a4a" },
        { colour: "Silver 5", code: "#262626" },
      ],
    },
    {
      colourName: "Sand",
      colourHex: "#C8BA8F",
      subColor: [
        { colour: "Sand 0", code: "#fae8b4" },
        { colour: "Sand 1", code: "#c8ba8f" },
        { colour: "Sand 2", code: "#978c6b" },
        { colour: "Sand 3", code: "#71684e" },
        { colour: "Sand 4", code: "#5c543b" },
        { colour: "Sand 5", code: "#574a24" },
      ],
    },
    {
      colourName: "Beige",
      colourHex: "#C9C5B1",
      subColor: [
        { colour: "Beige 0", code: "#ede8d1" },
        { colour: "Beige 1", code: "#c9c5b1" },
        { colour: "Beige 2", code: "#a6a392" },
        { colour: "Beige 3", code: "#8b887a" },
        { colour: "Beige 4", code: "#7c796d" },
        { colour: "Beige 5", code: "#787569" },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Redlily Colours</title>
  <meta name="robots" content="noindex, nofollow" />
  <link rel="icon" href="/favicon.svg" />
</svelte:head>
<Swatches {colours}></Swatches>
<Toast></Toast>
