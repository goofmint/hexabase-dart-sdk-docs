---
title: Basic Tutorial
---

#### Final Result
https://hokutosei.github.io/personal-cost/#/login

## Basic Tutorial: Introducing Hexabase SDK Toolkit

Welcome to Hexabase SDK, in this tutorial, I will show you the basic functions that are included in this SDK with nextjs

basically what sdk does is it wraps hexabase public API using best specific modules and functions that developers need to communicate within the protocols in the appropriate and intended manner.

this Tutorial assumes that you are familiar with nextjs library core concepts, as well as how to use it.

## Introduction: Writing a Personal budget, or cost dashboard application.
we'll start by looking at a small nextjs app using functional components. so our app, is having a personal budget or cost dashboard. 

we structure it starting with multiple `workspaces`, `projects(or years)`, `datastores (or months)`. then per `month`, we list expenses, debts, payments utitlities by items

with workspace, you can organize years, and months. 



## Getting Started
let's start by installing [react](https://reactjs.org/docs/getting-started.html) or [redux](https://redux.js.org/) if you haven't yet. and `hexabase-sdk` for our introduction using the sdk.

```cmd
# npm i @hexabase/hexabase-js
```

## Initialize connection and session with Hexabase
the SDK of course starts with connecting to the api-server, identifying the user credentials, and storing the session keys to localStorage. 

at this current version, I use `localStorage`, but this will change using bindings to state managements `redux`, `mobx`, or `recoil`

```ts
// index.tsx
import {createClient} from '@hexabase/hexabase-js';
const url = process.env.BASE_URL;
const hexabase = createClient(url, email: 'j.soliva@b-eee.com', password: 'test' );
```

## Introducing: getWorkspacesAsync
sdk includes getWorkspacesAsync to fetch all available workspaces for the user. this function wraps hexabase api for getting workspaces, returing a list of `Workspaces` in `Promise`


```ts
// fetchWorkspaces get all available workspaces
export const fetchWorkspaces = () => async (dispatch: any) => {

    let  {workspaces, error} = await hexabase
                    .workspaces
                    .getWorkspacesAsync()()<WorkspacesRes>();

    // we can use the response for dispatching an action
    dispatch(getWorkspaces(resp.workspaces));
}
```


## Introducing: getApplications
or in this tutorial, we call it as `years`
```ts
//fetchProjects get all projects by workspace id
    let {appAndDs, error} = await hexabase
                            .applications
                            .getAppAndDsAsync({ workspaceId: currentWs.workspace_id })<AppAndDsRes>();
    
    // we can use the response for dispatching an action
    dispatch(
        setProjects(appAndDs) // action
    );
```

## Introducing: getItemsAsync
```ts
    let {dsItems, error} = await hexabase
                        .items
                        .getItemsAsync({
                           getItemsParameters: GetItemsPl, datastoreId: string, 
                           projectId?: string      
                        })<DsItemsRes>();

    
    // we dispatch the mapped item
    dispatch(
        setDatastoreItemsAndCols(dsItems.items) // action
    )
```