---
title: Hexabase.Datastores
---

### <mark>Datastores</mark>
Datastore is a place to store many actions, managements, relations for the logical data items or rows.

In `Datastore` will have functions:
```bash
getActionsAsync() // get actions in datastore
getStatusesAsync() // get statuses in datastore
```

### getActionsAsync()

> get all user workspace actions in datastore 

```ts
  /**
   * get get actions in datastore
   * @param  {string} datastoreId
   * @returns Promise
   */
    public async getActionsAsync(datastoreId: string): Promise<DsActionRes>
```

> Successful response Schema

```json
  {
    "dsActions" : [
      {
        "workspace_id": "string",
        "project_id": "string",
        "datastore_id": "string",
        "action_id": "string",
        "is_status_action": "boolean",
        "display_id": "string",
        "operation": "string",
        "set_status": "string",
        "name": "string",
      }
    ],
  "error": undefined
}
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const datastoreId = '12345678';
  const hexabase = await createClient({ url: baseUrl, token: user.token});

  async function getActions(dsId) {
    const {dsActions, error} = await hexabase.datastore.getActionsAsync(dsId);
    return dsActions;
  }

  useEffect(() =>
  {
    const actions = getActions(datastoreId);
    return;
  }, []); 
```


### getStatusesAsync()

> get all user workspace statuses in datastore 

```ts
  /**
   * get get statuses in datastore
   * @param  {string} datastoreId
   * @returns Promise
   */
  public async getStatusesAsync(datastoreId: string): Promise<DsStatusRes>
```

> Successful response Schema

```json
  {
    "dsStatuses" : [
      {
        "display_id": "string",
        "name": {
          "en": "string",
          "jp": "string",
        },
        "displayed_name": "string",
        "status_id": "string",
        "sort_id": "number",
        "x": "string",
        "y": "string",
      }
    ],
  "error": undefined
}
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));

  const hexabase = await createClient({ url: baseUrl, token: user.token});

  async function getStatuses(dsId) {
    const {dsStatuses, error} = await hexabase.datastore.getStatusesAsync(dsId);
    return dsStatuses
  }

  useEffect(() =>
  {
    const statuses = getStatuses(datastoreId);
    return;
  }, []); 
```
