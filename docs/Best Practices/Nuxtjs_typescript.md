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

### Create services

Firstly, create auth services to handle `login`, `logout` or `register`

For example, add `login` function to user.service

```tsx
//user.service.ts

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

//add other service to handle authentication
//Auth guard should be created to handle auth-related redirects or further bussiness logics
```

![An image from the static](/img/screenshot-login.png)

## Fetching data

After login, let's get all available service.

```tsx
// workspace.service.ts

import { createClient, HexabaseClient } from "@hexabase/hexabase-js";
import { useRuntimeConfig } from "nuxt/app";
export const workspaceService = {
  getWorkspaces,
};
//create client variant first
//other functions in this service should reuse this
async function initHxbClient() {
  const token = JSON.parse(localStorage.getItem("user")!).token;
  const url = useRuntimeConfig().public.baseUrl;
  if (token && url) {
    const hexabase = await createClient({ url, token });
    return hexabase;
  }
}

async function getWorkspaces() {
  const hexabase = await initHxbClient();
  const { workspaces, error } = await hexabase.workspaces.get();
  return workspaces;
}
```

Once get workspaces list, we can render the _`<Select />`_ to choose a specific workspace to show its detail including projects and datastores. As example bellow, workspace with name _`Nguyen workspace`_ is selected to be displayed.

Let's pass the `current_workspace_id` to `getProjectsAndDatastores` api to get all projects and datastore of that workspace:

```tsx
//application.service.ts

async function getAppAndDs(id: string) {
  const hexabase = await initHxbClient();
  const { appAndDs, error } =
    await hexabase.applications.getProjectsAndDatastores(id);
  return appAndDs;
}
```

![An image from the static](/img/screenshot-workspace.png)

You can create a new _`workspace`_

```tsx
//workspace.service.ts

async function createWorkspace(name: string) {
  const createWsInput = {
    name,
  };
  const hexabase = await initHxbClient();
  const { w_id, error } = await hexabase.workspaces.create(createWsInput);
  return w_id;
}
```

Or create a new _`application`_ in current workspace

### _NOTE: `application` and `project` is equivalent in terms of meaning_

```tsx
//application.service.ts

import { CreateProjectPl } from "@hexabase/hexabase-js/src/lib/types/application";

async function createApp(createProjectParams: CreateProjectPl) {
  const hexabase = await initHxbClient();
  const { app, error } = await hexabase.applications.create(
    createProjectParams
  );
  return app?.project_id;
}
```

![An image from the static](/img/screenshot-createApp.png)

You can use a template, it is optional. Then you can create site to display detail information of datastores

```tsx
//item.service.ts

//get items of a datastore
async function getItems(
  projectId: string,
  datastoreId: string,
  getItemsParameters: GetItemsPl
) {
  const hexabase = await initHxbClient();
  const { dsItems, error } = await hexabase.items.get(
    getItemsParameters,
    datastoreId,
    projectId
  );
  return dsItems;
}

//get item detail
async function getItemDetail(
  datastoreId: string,
  itemId: string,
  projectId: string,
  itemDetailParams: GetItemDetailPl
) {
  const hexabase = await initHxbClient();
  const { itemDetails, error } = await hexabase.items.getItemDetail(
    datastoreId,
    itemId,
    projectId,
    itemDetailParams
  );
  return itemDetails;
}
```

After get items from a datastore by call `getItems` function, you should call `getFields` as well, to get should-be-displayed fields according to `fields setting`.

```tsx
//datastore.service.ts

async function getFields(datastoreId: string, projectId: string) {
  const hexabase = await initHxbClient();
  const { dsFields, error } = await hexabase.datastores.getFields(
    datastoreId,
    projectId
  );
  return dsFields;
}
```

_`/workspace/workspace_id/project/project_id/datastore/datastore_id`_
![An image from the static](/img/screenshot-item.png)

Click to any item to view the detail. The initial item detail automatically taken from the first elemtent of the table

![view item detail](/img/screenshot-item-viewDetail.png)

![create item](/img/screenshot-itemViewMedia.png)

[in progress]

Download media of item

You can delete an item

```tsx
//item.service.ts

async function deleteItem(
  projectId: string,
  datastoreId: string,
  itemId: string,
  deleteItemReq: DeleteItemReq
) {
  const hexabase = await initHxbClient();
  const { data, error } = await hexabase.items.delete(
    projectId,
    datastoreId,
    itemId,
    deleteItemReq
  );
  return data;
}
```

or add an item
![create item](/img/screenshot-createItem.png)

```tsx
async function createItem(
  projectId: string,
  datastoreId: string,
  newItemPl: CreateNewItemPl
) {
  const hexabase = await initHxbClient();
  const { itemNew, error } = await hexabase.items.create(
    projectId,
    datastoreId,
    newItemPl
  );
  return itemNew;
}
```

to edit item
![create item](/img/screenshot-updateItem.png)

```tsx
async function updateItem(
  projectId: string,
  datastoreId: string,
  itemId: string,
  itemActionParameters: ItemActionParameters
) {
  const hexabase = await initHxbClient();
  const { data, error } = await hexabase.items.update(
    projectId,
    datastoreId,
    itemId,
    itemActionParameters
  );
  return data;
}
```
