---
title: Hexabase.Datastores
---

### <mark>Datastores</mark>
Datastore is a place to store many actions, managements, relations for the logical data items or rows.

In `Datastore` will have functions:
```bash
getActions() // get actions in datastore
getStatuses() // get statuses in datastore
getField() // get field setting in datastore
```

### - getField()

```ts
 /**
   * function getField: get field setting in Ds
   * @params fieldId and datastoreId are requirement
   * @returns DsFieldSettingsRes
   */
  public async getField(fieldId: string, datastoreId: string): Promise<DsFieldSettingsRes> 
```

> Successful response Schema

```json
  {
    "dsField" : {
      "value": null,
      "project_id": "620dd1ca61985350c2d26e5a",
      "workspace_id": "620dd1c861985350c2d26e57",
      "name": {
        "ja": "id",
        "en": "id"
      },
      "field_id": "27b03c69-fb79-4112-a889-6f22284a0dc4",
      "datastore_id": "6281fd59989773ffe4504354",
      "dataType": "status",
      "display_id": "id",
      "as_title": false,
      "show_list": true,
      "search": true,
      "status": true,
      "full_text": false,
      "unique": false,
      "hideOnInput": false,
      "hide_from_api": false,
      "has_index": true,
      "roles": [
        {
          "can_execute": null,
          "can_use": true,
          "project_id": "620dd1ca61985350c2d26e5a",
          "type": "admin",
          "name": "admin",
          "display_id": "ADMIN",
          "role_id": "620dd1ca61985350c2d26e5b"
        },
       ...
      ]
    },
  "error": undefined
}
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const datastoreId = '6281fd59989773ffe4504354';
  const fieldId = "27b03c69-fb79-4112-a889-6f22284a0dc4";
  const hexabase = await createClient({ url: baseUrl, token: user.token});
  const [field, setField] = useState({} as DsFieldSettings);

  async function getFieldSetting(dsId) {
    const {dsActions, error} = await hexabase.datastores.getField(fieldId, datastoreId);
    return dsActions;
  }

  useEffect(() =>
  {
    const fSetting = getFieldSetting(fieldId, datastoreId);
    if (fSetting) {
      setField(fSetting)
    }
    return;
  }, []); 
```

### - getActions()

```ts
  /**
   * get get actions in datastore
   * @param  {string} datastoreId
   * @returns Promise
   */
    public async getActions(datastoreId: string): Promise<DsActionRes>
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
  const [dsAction, setDsAction] = useState({} as [DsAction]);

  async function getActions(dsId) {
    const {dsActions, error} = await hexabase.datastores.getActions(dsId);
    return dsActions;
  }

  useEffect(() =>
  {
    const actions = getActions(datastoreId);
    if (actions) {
      setDsAction(actions)
    }
    return;
  }, []); 
```


### getStatuses()

```ts
  /**
   * get get statuses in datastore
   * @param  {string} datastoreId
   * @returns Promise
   */
  public async getStatuses(datastoreId: string): Promise<DsStatusRes>
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
  const [dsStatus, setDsStatus] = useState({} as [DsStatus]);

  const hexabase = await createClient({ url: baseUrl, token: user.token});

  async function getStatuses(dsId) {
    const {dsStatuses, error} = await hexabase.datastores.getStatuses(dsId);
    return dsStatuses
  }

  useEffect(() =>
  {
    const statuses = getStatuses(datastoreId);
    if (statuses) {
      setDsStatus(statuses)
    }
    return;
  }, []); 
```
