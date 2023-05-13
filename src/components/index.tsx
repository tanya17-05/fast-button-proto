import { DesignSystem } from "@microsoft/fast-foundation";

export * from "./ls-login-anchor"

export function provideGA4GHSystem(element?: HTMLElement): DesignSystem {
    return DesignSystem.getOrCreate(element).withPrefix("ga4gh");
}