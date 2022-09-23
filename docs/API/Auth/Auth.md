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
   * @returns Promise
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
   * @returns Promise
   */
  public async logout(token: string): Promise<ModelRes>
```

> Successful response Schema

```json
  {
    "data" : "data",
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
   * return user basic informations
   * @returns Promise
   */
  public async get(): Promise<UserInfoRes>
```

> Successful return Schema 
```json
{
  "uid": "string",
  "username": "string",
  "email": "string",
  "profile_pic": "string",
  "current_workspace_id": "string",
  "is_ws_admin": true,
  "user_roles": [
    {
      "rid": "string",
      "role_name": "string",
      "role_display_id": "string",
      "pid": "string",
      "app_display_id": "string",
      "app_name": "string",
      "app_display_order": 0
    }
  ]
}
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));

  const [userInfo, setUserInfo] = useState({} as UserInfo);

  async function getUser() {
    const {userInfo, error} = await hexabase.users.get();
    return userInfo;
  }

  useEffect(() =>
  {
    const userInfo = getUser();
    if(userInfo) {
      setUserInfo(userInfo);
    }
    return;
  }, []);
```
