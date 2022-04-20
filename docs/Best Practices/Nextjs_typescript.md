---
title: Nextjs
---

## Create Project
```
  yarn create hexabase-next-sdk --typescript
```

## Install `@hexabase/hexabase-js`
```
  npm i @hexabase/hexabase-js
```

## Initialize Hexabase APP
`/service/index.js`
```ts 
  import { createClient } from '@hexabase/hexabase-js'
  const url = process.env.BASE_URL;

  const hexabse = initializeApp(
    url,
    email: 'j.soliva@b-eee.com',
    password: 'jinpol0405'
  )
```

## List Database
```jsx
  let {appAndDs, error} = await hexabse.application.getAppAndDsAsync(workspaceID)
  {appAndDs &&
    appAndDs.map(app =>
    {
      <div>{app.application_id} -> {app.name}</div>
      <div>{app.datastores.map(ds => (
        <div>{ds.datastore_id} -> {ds.name}</div>
      ))}</div>
    })
  }
```