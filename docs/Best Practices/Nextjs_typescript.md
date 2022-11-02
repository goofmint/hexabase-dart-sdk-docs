---
title: Nextjs 
---
### Getting Started

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
npx create-next-app@latest
```

</TabItem>
<TabItem value="yarn">

```ts
yarn create next-app
```

</TabItem>
</Tabs>


### Edit the `next.config.ts`

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    URL: process.env.URL_GRAPHQL || process.env.URL || 'https://hxb-graph.hexabase.com/graphql',
  },
}

```

### Create services

Firstly, create auth services to handle `login`, `logout` or `register`

For example, add `login` function to user.service

```tsx
//user.service.js

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

![An image from the static](/img/nextjs/login.png)

## Fetching data

After login, let's get all available service.

```tsx
// workspace.service.ts


import { createClient, HexabaseClient } from "@hexabase/hexabase-js";
export const workspaceService = {
  getWorkspaces,
};

async function getWorkspaces() {
  const user = JSON.parse(localStorage.getItem("user"));
  const hexabase = await createClient({ url: baseUrl, token: user.token });
  const { workspaces, error } = await hexabase.workspaces.get();
  return workspaces;
}
```
Let's pass the `current_workspace_id` to `getProjectsAndDatastores` api to get all projects and datastore of that workspace:

```tsx
//application.service.js

async function getAppAndDs(id) {
  const user = JSON.parse(localStorage.getItem("user"));
  const hexabase = await createClient({ url: baseUrl, token: user.token });
  const { appAndDs, error } =
    await hexabase.applications.getProjectsAndDatastores(id);
  return appAndDs;
}
```

![An image from the static](/img/nextjs/workspaces-list.PNG)

You can create a new _`workspace`_

```tsx
//workspace.service.ts

//workspace.service.js

async function createWorkspace(name) {
  const user = JSON.parse(localStorage.getItem("user"));
  const hexabase = await createClient({ url: baseUrl, token: user.token });
  const { w_id, error } = await hexabase.workspaces.create(name);
  return w_id;
}
```

Or create a new _`application`_ in current workspace

### _NOTE: `application` and `project` is equivalent in terms of meaning_

```tsx
//application.service.ts

async function createApp(createProjectParams) {
  const user = JSON.parse(localStorage.getItem("user"));
  const hexabase = await createClient({ url: baseUrl, token: user.token });
  const { app, error } = await hexabase.applications.create(
    createProjectParams
  );
  return app?.project_id;
}
```

![An image from the static](/img/nextjs/create-project.png)

You can use a template, it is optional. Then you can create site to display detail information of datastores

```tsx
//item.service.ts

//get items of a datastore
async function getItems(datastoreId, projectId, getItemsParameters) {
  const user = JSON.parse(localStorage.getItem("user"));
  const hexabase = await createClient({ url: baseUrl, token: user.token });
  const { dsItems, error } = await hexabase.items.get(
    getItemsParameters,
    datastoreId,
    projectId
  );
  return dsItems;
}

//get item detail
async function getItemDetail(datastoreId, itemId) {
  const user = JSON.parse(localStorage.getItem("user"));
  const hexabase = await createClient({ url: baseUrl, token: user.token });
  const { itemDetails, error } = await hexabase.items.getItemDetail(
    datastoreId,
    itemId
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
![An image from the static](/img/nextjs/get-items.png)

Click to any item to view the detail. The initial item detail automatically taken from the first elemtent of the table

![update item detail](/img/nextjs/update-item.png)

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
![create item](/img/nextjs/create-item.jpg)

```tsx
async function create(projectId, datastoreId, newItemPl) {
  console.log(newItemPl);
  const user = JSON.parse(localStorage.getItem("user"));
  const hexabase = await createClient({ url: baseUrl, token: user.token });
  const { itemNew, error } = await hexabase.items.create(
    projectId,
    datastoreId,
    newItemPl
  );
  return itemNew;
}
```

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

`status` and `user_id` options should taken as follows:

```tsx
//get status list

async function getStatuses(datastoreId: string) {
  const hexabase = await initHxbClient();
  const { dsStatuses, error } = await hexabase.datastores.getStatuses(
    datastoreId
  );
  return dsStatuses;
}
```

`get user_id list` has not available, so you now just can take an user_id from items data

to edit item
![create item](/img/nextjs/update-item.png)

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

Beside to those inputs, other config in payload should be done logically

As in upload file service, it should be attached with this payload type

```tsx
const payload = {
  contentTypeFile: contentTypeFile,
  filename: nameFile,
  filepath: `${datastoreId}/${itemId}/${fieldId}/${nameFile}`,
  d_id: datastoreId,
  p_id: projectId,
  item_id: itemId,
  display_order: 0,
  field_id: fieldId,
  content: content, //result as base64 format
};
```

```tsx
{
  datastoreId: string,
  itemId: string,
  projectId: string,
  ItemActionParameters {
    action_id?: string;
    rev_no?: number;
    use_display_id?: boolean;
    is_notify_to_sender?: boolean;
    ensure_transaction?: boolean;
    exec_children_post_procs?: boolean;
    history?: ItemHistory;
    datastore_id?: string;
    comment?: string;
    changes?: any;
    item?: any;
    groups_to_publish?: any;
    is_force_update?: boolean;
    access_key_updates?: FieldAccessKeyUpdates;
    return_item_result?: boolean;
    return_actionscript_logs?: boolean;
    disable_linker?: boolean;
    as_params?: any;
    related_ds_items?: any;
  }
}
```

where `tabIndex` and `idx` will be calculated as follows

```tsx
tabindex = (fieldIdLayout.row + 1) * 10 + fieldIdLayout.col;
```

fieldIdLayout is field settings of chosen filed, `find` from fieldLayout list, taken from getFields api (datastore service)

```tsx
const fieldSettings = await datastoreService.getDetail(this.ds_id);
const idx = fieldSettings.fields.find(
  (s: any) => s.id === field.field_id
).field_index;

// fieldSettings taken from api getDetail of datastore services.
// field is input specific element of one item
```
