---
title: Hexabase.Users
---


In `Auth` will have functions:
```bash
loginAsync() // login with email and password
```

In `User` will have functions:
```bash
userInfoAsync() // get user info by token
```


### hexabaseLoginAsync()
#### [WIP]
```tsx
    /**
     * @param  {LoginInputPayload} loginInput
     * @returns Promise
     */
    public async loginAsync(loginInput: LoginInputPayload ): Promise<LoginRes>
```
> Usages
```tsx
var respToken = await this.auth.loginAsync({ "email": "j.soliva@hexabase.com", "password": "123456" });
```

### loginAsync()
#### [WIP]
`loginAsync` is the basic api that auth user credentials, return a json `{"token": "eyJhbGciOiJIxxxx"}` that you can use to store JWT token
```tsx
  /**
   * @param  {LoginInputPayload} loginInput
   * @returns Promise
   */
  public async loginAsync(loginInput: LoginInputPayload): Promise<LoginRes>
```
> Usages
```tsx
  import {createClient} from '@hexabase/hexabase-js';
  const url = process.env.BASE_URL;
  const hexabase = await createClient({ url, email, password });
  var {token, error} = await await hexabase.auth.loginAsync({ email: 'j.soliva@b-eee.com', password: '123456' });
```

### userInfoAsync()

get user informations

```ts
  /**
   * return user basic informations
   * @returns Promise
   */
  public async userInfoAsync(): Promise<UserInfoRes>
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

  async function getUserInfo() {
    const {userInfo, error} = await hexabase.users.userInfoAsync();
    return userInfo;
  }

  useEffect(() =>
  {
    const userInfo = getUserInfo();
    if(userInfo) {
      setUserInfo(userInfo);
    }
    return;
  }, []);
```
