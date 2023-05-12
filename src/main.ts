import {
  fastAnchor,
  provideFASTDesignSystem,
  controlCornerRadius,
  neutralPalette,
  PaletteRGB,
  baseLayerLuminance,
  StandardLuminance,
  SwatchRGB,
} from "@microsoft/fast-components";
import { lsLoginAnchor } from "./components";
import { parseColorHexRGB } from "@microsoft/fast-colors";

provideFASTDesignSystem().register(
  fastAnchor(),
  lsLoginAnchor(),
);

controlCornerRadius.withDefault(0);

baseLayerLuminance.withDefault(StandardLuminance.LightMode);

const firstAnchor = document.querySelector("fast-ls-login-anchor") as HTMLElement;

neutralPalette.withDefault(
  PaletteRGB.create(SwatchRGB.from(parseColorHexRGB("#00ff00")!))
);

neutralPalette.setValueFor(
  firstAnchor,
  PaletteRGB.create(SwatchRGB.create(0.1, 0, 1))
);
