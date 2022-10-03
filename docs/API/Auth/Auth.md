---
title: Hexabase.Auth
---


In `Auth` will have functions:
```bash
login() // login with email and password
logout() // logout user
```


### - login()
```tsx
  /** login user
   * @param  {LoginPayload} loginInput
   * @returns LoginRes
   */
  public async  login(loginInput: LoginPayload): Promise<LoginRes>
```

> Successful response Schema

```json
  {
    "token" : "token",
    "error": undefined
  }
```

> Usages
```tsx
  import {createClient} from '@hexabase/hexabase-js';
  const url = process.env.BASE_URL;
  const hexabase = await createClient({ url, email, password });
  var {token, error} = await await hexabase.auth.login({ email: 'j.soliva@b-eee.com', password: '123456' });
```

### - logout()
```tsx
  /** logout user
   * @param  {string} token
   * @returns ModelRes
   */
  public async logout(token: string): Promise<ModelRes>
```

> Successful response Schema

```json
  {
    "data" : {
      "success": "boolean",
      "data": "string",
    },
    "error": undefined
  }
```

> Usages
```tsx
  import {createClient} from '@hexabase/hexabase-js';
  const url = process.env.BASE_URL;
  const hexabase = await createClient({ url, email, password });
  var {data, error} = await await hexabase.auth.logout("token");
```