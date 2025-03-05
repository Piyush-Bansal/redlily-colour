export interface SubColour {
  colour: string;
  code: string;
}

export interface Colour {
  colourName: string;
  colourHex: string;
  subColor: SubColour[];
}

export type Colours = Colour[];

export type CurrentSwatch = {
  current: null | string;
};
