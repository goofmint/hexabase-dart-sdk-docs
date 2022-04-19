## Hexabase Configuration

Starting with Hexabase class, it is used to `createClient` to hexabase. by initializing this class. Then you can using your credential in `createClient`.
> Note: 
> 
> 1) this SDK uses `async/await -> Promise<T>` to access Hexabase Grapql.
>
> 2) currently, does not have special bindings to any react, next, mobx or any state managements
>
> 3) basically, the implementation of the sdk is to wrap around hexabase Grapql

## Configuration


```ts
// Initialize default app
// use your own/company credentials
import { createClient } from '@hexabase/hexabase-js'

const hexabase = createClient(
    url:'https://hxb-graph.hexabase.com/graphql',
    email: 'j.soliva@b-eee.com',    // registered user email address in Hexabase
    password: '123456'              // user password
)
```