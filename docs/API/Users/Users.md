---
title: Hexabase.Users
---


### userInfoAsync

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

### getTokenAsync
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