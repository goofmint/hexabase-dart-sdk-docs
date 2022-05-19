---
title: Hexabase.Users
---

In `User` will have functions:
```bash
register() // get user register info by confirmationId
```

### - register()

```ts
/**
 * function userRegisterAsync: get user register info by confirmationId
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
