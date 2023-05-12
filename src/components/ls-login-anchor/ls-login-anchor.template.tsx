import { html, ViewTemplate } from "@microsoft/fast-element";
import { Anchor, FoundationElementTemplate } from "@microsoft/fast-foundation";
// import {} from "@microsoft/fast-components"
import type {
  LsLoginAnchor,
  LsLoginAnchorDefinitionOptions,
} from "./ls-login-anchor";

function arr2obj(arr: any[]) {
  const obj: any = {};
  arr.forEach((v: any) => {
    let key = v[0];
    if (key === '#access_token') {
      key = 'access_token';
    }
    const value = v[1];
    obj[key] = value;
  });
  return obj;
}

export const template: FoundationElementTemplate<
  ViewTemplate<LsLoginAnchor>,
  LsLoginAnchorDefinitionOptions
> = (context) => {
  const anchorTag = context.tagFor(Anchor);

  const host_uri = window.location.href
  const params = new URLSearchParams(location.hash);
  let param = [...params.entries()];
    if (!param || param.length === 0) {
      param = JSON.parse(localStorage.getItem('params')!);//temp !
    } else {
      param = arr2obj(param);
      localStorage.setItem('params', JSON.stringify(param));
      // navigate('/');
    }

  return html`<${anchorTag} href="https://login.elixir-czech.org/oidc/authorize?response_type=token id_token&scope=openid profile email eduperson_entitlement ga4gh_passport_v1&client_id=5fc66010-a596-48e4-8c09-89a767ef136c&state=StAtE&redirect_uri=${host_uri}">LS login</${anchorTag}>`;
};
