import {
  fastAnchor,
  controlCornerRadius,
  neutralPalette,
  PaletteRGB,
  baseLayerLuminance,
  StandardLuminance,
  SwatchRGB,
  density,
  typeRampBaseFontSize,
  typeRampMinus1FontSize
} from "@microsoft/fast-components";
import { lsLoginAnchor, provideGA4GHSystem } from "./components";
import { parseColorHexRGB } from "@microsoft/fast-colors";

// registering web-component
provideGA4GHSystem().register(
  fastAnchor(), // important to use default design tokens
  lsLoginAnchor(),
);

const firstAnchor = document.querySelector("ga4gh-ls-login-anchor") as HTMLElement;

// changing default border radius
controlCornerRadius.withDefault(0);

// switching to ligh mode
baseLayerLuminance.withDefault(StandardLuminance.LightMode);


// creating base color
neutralPalette.withDefault(
  PaletteRGB.create(SwatchRGB.from(parseColorHexRGB("#00ff00")!))
);

// changing color for specific element
neutralPalette.setValueFor(
  firstAnchor,
  PaletteRGB.create(SwatchRGB.create(0.1, 0, 1))
);

// changing the font size
typeRampBaseFontSize.withDefault(typeRampMinus1FontSize)

// changing the padding
density.withDefault(2)