---
title: Nuxtjs V3
---

### Create Project

```ts
  npx nuxi init nuxt-hxb-sdk
```

### Open nuxt-hxb-sdk in Visual Studio Code:

```ts
  code nuxt-hxb-sdk
```

You can choose your favavite IDE

### Install packages

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```ts
npm install
```

</TabItem>
<TabItem value="yarn">

```ts
yarn add
```

</TabItem>
</Tabs>

### Install `hexabase package`

<Tabs
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```ts
npm install @hexabase/hexabase-js
```

</TabItem>
<TabItem value="yarn">

```ts
yarn add @hexabase/hexabase-js
```

</TabItem>
</Tabs>

### Edit the `nuxt.config.ts`

```ts
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,
  target: "static",
  publicRuntimeConfig: {
    baseUrl: "https://example.com",
  },
  head: {
    title: "nuxt-hxb-sdk",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "../public/favicon.png" }],
  },

  typescript: {
    strict: true,
    shim: false,
  },

  // auto import components
  components: true,

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
});
```

### Add services

`user.service.ts` to handle login / logout services

```tsx
import { createClient } from "@hexabase/hexabase-js";
import { useRoute, useRouter } from "nuxt/app";

export const userService = {
  login,
};

async function login(baseUrl: string, email: string, password: string) {
  let user = {};

  //init client using email and password
  const hexabase = await createClient({
    url: baseUrl,
    token: "",
    email,
    password,
  });

  //login to get token
  const { token, error } = await hexabase.auth.login({ email, password });
  if (token && !error) {
    //get user info and save to localstorage
    const { userInfo, error } = await hexabase.users.get(token);
    if (userInfo && !error) {
      user = userInfo;
      user.token = token;
    }
    localStorage.setItem("user", JSON.stringify(user));
  }
  return token;
}
```

![An image from the static](/img/screenshot-login.png)

For other services, such as `workspace.service.ts`

```tsx
import { createClient, HexabaseClient } from "@hexabase/hexabase-js";
import { useRuntimeConfig } from "nuxt/app";
export const workspaceService = {
  getWorkspaces,
};
//create client variant first
async function initHxbClient() {
  // get token from localstorage
  // get base url from runtimeConfig that described in `nuxt.config.ts`
  const token = JSON.parse(localStorage.getItem("user")!).token;
  const hexabase =
    token &&
    (await createClient({ url: useRuntimeConfig().public.baseUrl, token }));
  return hexabase;
}

// get all workspaces
async function getWorkspaces() {
  const hexabase = await initHxbClient();
  //call method of hexabase client
  const { workspaces, error } = await hexabase.workspaces.get();
  return workspaces;
}
```

##### workspace

![An image from the static](/img/screenshot-workspace.png)

#### then you can create site to display datastores of each project

##### datastores

![An image from the static](/img/screenshot-datastore.png)
