---
title: Hexabase.Auth
---


In `Auth` will have functions:
```bash
login() // login with email and password
logout() // logout user
get() //  get infomation user by token
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

### - get()

get user informations

```ts
  /**
   * function get: get user info by token
   * @returns UserInfoRes
   */
  public async get(token: string): Promise<UserInfoRes>
```

> Successful return Schema 
```json
{
  "uid": "string",
  "username": "string",
  "email": "string",
  "profile_pic": "string",
  "u_id": "string",
  "current_workspace_id": "string",
  "is_ws_admin": true,
  "user_roles": [
    {
      "r_id": "string",
      "role_name": "string",
      "role_id": "string",
      "p_id": "string",
      "application_id": "string",
      "application_name": "string",
      "application_display_order": "string",
    },
    ...
  ]
}
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const token = 'xxxxxxxxxx.xxxxxxxxxxxx.xxxxxxxxxxxx';
  const [userInfo, setUserInfo] = useState({} as UserInfo);

  async function getUser(token: string) {
    const {userInfo, error} = await hexabase.users.get(token);
    return userInfo;
  }

  useEffect(() =>
  {
    const userInfo = getUser(token);
    if(userInfo) {
      setUserInfo(userInfo);
    }
    return;
  }, []);
```
