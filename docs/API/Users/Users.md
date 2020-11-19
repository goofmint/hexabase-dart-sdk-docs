---
title: Hexabase.Users
---

### hexabaseLoginAsync()
#### [WIP]
```tsx
    /**
     * @param  {HexabaseConfig} payload
     * @returns Promise
     */
    public async hexabaseLoginAsync(payload: HexabaseConfig): Promise<UsersLoginResp>
```
> Usages
```tsx
var respToken = await this.auth.hexabaseLoginAsync({ "email": "j.soliva@hexabase.com", "password": "123456" });
```

### loginAsync()
#### [WIP]
`loginAsync` is the basic api that auth user credentials, return a json `{"token": "fdsafasfsa2313131"}` that you can use to store JWT token
```tsx
    /**
     * @param  {UsersLoginReq} payload
     * @returns Promise
     */
    public async loginAsync(payload: UsersLoginReq): Promise<UsersLoginResp>
```
> Usages
```tsx
    var auth = new Auth();
    var respToken = await auth.loginAsync({ email: 'j.soliva@b-eee.com', password: '123456' });
    HxbSessionStorage.Write('token', respToken.token);
```

### userInfoAsync()

get user informations

```ts
    /**
     * return user basic informations
     * @returns Promise
     */
    public async userInfoAsync(): Promise<UserInfoResp>
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

- ### usage
```ts
    let userInfo = await Hexabase.users().userInfoAsync();
```

### getTokenAsync()
get temporary token

```ts
    /**
     * get temporary token
     * @returns Promise
     */
    public async getTokenAsync(): Promise<UsersLoginResp>
```

> Successful return schema

```json
{
  "token": "string"
}
```


- ### usage
```ts
    var auth = new Auth();
    var tokenResp = await auth.getTokenAsync();
```
