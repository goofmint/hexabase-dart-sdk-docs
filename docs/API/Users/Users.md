---
title: Hexabase.Users
---

In `User` will have functions:
```bash
register() // get user register info by confirmationId.
userConfirm() //get info user confirm by confirmationId.
getPasswordExpire() //check user password is expiry.
get() // get user info by token
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
  "u_id": "string",
  "username": "string",
  "email": "string",
  "profile_pic": "string",
  "current_workspace_id": "string",
  "is_ws_admin": "boolean",
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

### - register()

```ts
/**
* function register: get user register info by confirmationId
* @param confirmationId
* @returns UserRegisterRes
*/
public async register(confirmationId: string): Promise<UserRegisterRes>
```

> Successful return Schema 
```json
{
  "userRegister": {
    "username": "username",
    "isElapsed": true,
    "id": "id",
    "email_confirmed": true,
    "email": "email",
    "confirmed": true,
    "confirmation_id": "confirmation_id",
  },
  "error": undefined
}
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));

  const [userRegister, setUserRegister] = useState({} as UserRegister);

  async function getUserInfo(confirmationId: string) {
    const {userRegister, error} = await hexabase.users.register(confirmationId);
    return userRegister;
  }

  useEffect(() =>
  {
    const userRes = getUserInfo(confirmationId);
    if(userRes) {
      setUserRegister(userRes);
    }
    return;
  }, []);
```

### - getPasswordExpire()

```ts
  /**
   * function getPasswordExpire: check user password is expiry
   * @returns UserPassExRes
   */
public async getPasswordExpire(): Promise<UserPassExRes>
```

> Successful return Schema 
```json
{
  "userPassEx": {
    "is_expired":false,
  },
  "error": undefined
}
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));

  const [userPassEx, setUserPassEx] = useState({} as UserPassExRes);

  async function getPasswordExpire() {
    const {userPassEx, error} = await hexabase.users.getPasswordExpire();
    return userRegister;
  }

  useEffect(() =>
  {
    const userPassEx = getPasswordExpire();
    if(userPassEx) {
      setUserPassEx(userPassEx);
    }
    return;
  }, []);
```


### - userConfirm()

```ts
  /**
   * function userConfirm: get info user confirm by confirmationId
   * @params {string} confirmationId
   * @returns UserConfirmRes
   */
public async userConfirm(confirmationId: string): Promise<UserConfirmRes>
```

> Successful return Schema 
```json
{
  "userConfirm": {
        "confirmation_id": "string",
        "confirmed": "boolean",
        "current_workspace_id": "string",
        "email": "string",
        "tmp_email": "string",
        "email_confirmed": "boolean",
        "id": "string",
        "isElapsed": "boolean",
        "username": "string",
        "workspace": {
          "is_root": "boolean",
          "name": "string",
          "index": "number",
          "id": "string",
          "g_id": "boolean",
          "display_id": "string",
          "disable_ui_access": "boolean",
          "created_at": "string",
          "access_key": "string",
        }
  },
  "error": undefined
}
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const confirmationId = '1a2c3x4d5e6f';
  const [userConfirm, setUserConfirm] = useState({} as UserConfirmRes);

  async function userConfirm(confirmationId: string) {
    const {userConfirm, error} = await hexabase.users.userConfirm(confirmationId);
    return userRegister;
  }

  useEffect(() =>
  {
    const userConfirm = userConfirm(confirmationId);
    if(userConfirm) {
      setUserConfirm(userConfirm);
    }
    return;
  }, []);
```