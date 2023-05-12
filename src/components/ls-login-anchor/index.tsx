import { template } from "./ls-login-anchor.template";
import { LsLoginAnchor, LsLoginAnchorDefinitionOptions } from "./ls-login-anchor";

export const lsLoginAnchor = LsLoginAnchor.compose<LsLoginAnchorDefinitionOptions>({
    baseName: "ls-login-anchor",
    template,
});

export * from "./ls-login-anchor";