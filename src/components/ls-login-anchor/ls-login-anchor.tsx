import {  FoundationElementDefinition } from "@microsoft/fast-foundation";
import { ViewTemplate } from "@microsoft/fast-element";
import { fillColor, neutralFillLayerRecipe, Anchor } from "@microsoft/fast-components";

/**
 * We can provide custom configuration for a component by defining a type as
 * shown below and then using it in template or style factories along with the
 * call to FoundationElement.compose.
 */
export type LsLoginAnchorDefinitionOptions = FoundationElementDefinition & {
    likeAnchor?: ViewTemplate;
};

/**
 * While an empty class is technically not needed for use with FoundationElement.compose,
 * one is provided here as a demonstration of practices used in more complex components.
 */
export class LsLoginAnchor extends Anchor {
    connectedCallback(): void {
        super.connectedCallback();
        const { parentElement } = this;

        if (parentElement) {
            fillColor.setValueFor(this, (el: HTMLElement) =>
                neutralFillLayerRecipe
                    .getValueFor(this)
                    .evaluate(el, fillColor.getValueFor(parentElement))
            );
        }
    }
}