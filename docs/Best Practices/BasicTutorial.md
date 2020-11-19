---
title: Basic Tutorial
---

#### Final Result
https://hokutosei.github.io/personal-cost/#/login

## Basic Tutorial: Introducing Hexabase SDK Toolkit

Welcome to Hexabase SDK, in this tutorial, I will show you the basic functions that are included in this SDK with react, redux, and typescript.

basically what sdk does is it wraps hexabase public API using best specific modules and functions that developers need to communicate within the protocols in the appropriate and intended manner.

this Tutorial assumes that you are familiar with react+redux library core concepts, as well as how to use it.

## Introduction: Writing a Personal budget, or cost dashboard application.
we'll start by looking at a small react+redux app using functional components. so our app, is having a personal budget or cost dashboard. 

we structure it starting with multiple `workspaces`, `projects(or years)`, `datastores (or months)`. then per `month`, we list expenses, debts, payments utitlities by items

with workspace, you can organize years, and months. 



## Getting Started
let's start by installing [react](https://reactjs.org/docs/getting-started.html) or [redux](https://redux.js.org/) if you haven't yet. and `hexabase-sdk` for our introduction using the sdk.

```cmd
# npm i hexabase-sdk
```

## Initialize connection and session with Hexabase
the SDK of course starts with connecting to the api-server, identifying the user credentials, and storing the session keys to localStorage. 

at this current version, I use `localStorage`, but this will change using bindings to state managements `redux`, `mobx`, or `recoil`

```ts
// index.tsx
Hexabase.initializeApp({ email: 'j.soliva@b-eee.com', password: 'test' });
```

## Introducing: getWorkspacesAsync
sdk includes getWorkspacesAsync to fetch all available workspaces for the user. this function wraps hexabase api for getting workspaces, returing a list of `Workspaces` in `Promise`
```ts
    // store.tsx
    let resp = await Hexabase
                    .workspaces()
                    .getWorkspacesAsync()
                    .ResultAsync<{workspaces: Array<any>}>();

    // after we get the result, we can use the response for dispatching an action
    dispatch(
        getWorkspaces(resp.workspaces) // action
    );    
```

```ts
// fetchWorkspaces get all available workspaces
export const fetchWorkspaces = () => async (dispatch: any) => {

    let resp = await Hexabase
                    .workspaces()
                    .getWorkspacesAsync()
                    .ResultAsync<{workspaces: Array<any>}>();

    dispatch(getWorkspaces(resp.workspaces));
}
```


## Introducing: getApplications
or in this tutorial, we call it as `years`
```ts
    let applications = await Hexabase
                            .applications()
                            .getApplications({ workspace_id: currentWs.workspace_id })
                            .ResultAsync<any>();
    
    // we can use the response for dispatching an action
    dispatch(
        setProjects(applications) // action
    );
```

```ts
// fetchProjects get all projects by workspace id
export const fetchProjects = (currentWs: any) => async (dispatch: any) => {
    let applications = await Hexabase
                            .applications()
                            .getApplications({ workspace_id: currentWs.workspace_id })
                            .ResultAsync<any>();

    dispatch(setProjects(applications));
}
```

## Introducing: getItemsAsync
```ts
    let items = await Hexabase
                        .items()
                        .getItemsAsync({
                            project_id: project_id,
                            datastore_id: datastore.datastore_id,
                            per_page: 1, 
                            page: 1, 
                            use_display_id: true        
                        })
                        .ResultAsync<any>();

    // we now map the results to fit our table later in the UI
    var payload = {} as any;

    // this is a basic setup, we exclude fields that is not necessary to be displayed to the table. 
    // som are system generated id's that may be not suited to display
    payload.cols = Object.keys(items.items[0]).filter(a => !exceptId.includes(a));
    payload.items = items.items;

    // we dispatch the mapped rows and columns
    dispatch(
        setDatastoreItemsAndCols(payload) // action
    )
```