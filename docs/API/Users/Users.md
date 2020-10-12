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

- ### returns 
```ts
interface UserInfoResp {
    u_id: string;
    username: string;
    email: string;
    profile_pic: string;
    current_workspace_id: string;
    is_ws_admin: boolean;
    user_roles: UserRole[];
}
```

- ### usage
```ts
    let userInfo = async Hexabase.users().userInfoAsync();
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


- ### usage
```ts
    var auth = new Auth();
    var tokenResp = await auth.getTokenAsync();
```