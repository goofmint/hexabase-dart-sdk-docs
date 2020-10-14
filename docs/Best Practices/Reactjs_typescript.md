---
title: React + Typescript
---

## Create Project
```
    create-react-app hxbase-react-app --typescript
```

## Install `hexabase-sdk`
```
npm i hexabase-sdk
```

## Initialize Hexabase APP
`/src/index.ts`
```ts 
    import { Hexabase } from 'hexabase-sdk'

    Hexabase.initializeApp({
        email: 'j.soliva@b-eee.com',
        password: 'jinpol0405'
    })
```

## List Database
```jsx
    let datastores = await Hexabase.datatores().listDatabases()
    {datastores &&
        datastores.getItems().map(item =>
        {
            <div>{item.id} -> {item.name}</div>
        })
    }
```