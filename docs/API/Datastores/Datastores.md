---
title: Hexabase.Datastores
---

### <mark>Datastores</mark>
Datastore is a place to store many actions, managements, relations for the logical data items or rows.

In `Datastore` will have functions:
```bash
get() // get all datastore
getDetai() // get detail datastore
create() // create datastore
updateDatastoreSetting() // update datastore
deleteDatastore() // delete datastore
getActions() // get actions in datastore
getStatuses() // get statuses in datastore
getField() // get field setting in datastore
getAction() //get field action setting in datastore
```

### - get()

```ts
 /**
   * function get: get datastore
   * @params {string} projectId are requirement
   * @returns DatastoreRes
   */
  public async get(projectId: string): Promise<DatastoreRes>
```

> Successful response Schema

```json
  {
    "datastores": [
      {
          "d_id": "string",
          "p_id": "string",
          "w_id": "string",
          "ws_name": "string",
          "name": "string",
          "uploading": "boolean",
          "imported": "boolean",
          "no_status": "boolean",
          "show_in_menu": "boolean",
          "deleted": "boolean",
          "display_order": "number",
          "display_id": "string",
          "show_only_dev_mode": "boolean",
          "use_qr_download": "boolean",
          "use_csv_update": "boolean",
          "use_external_sync": "boolean",
          "use_replace_upload": "boolean",
          "unread": "number",
          "invisible": "boolean",
          "use_grid_view": "boolean",
          "use_grid_view_by_default": "boolean",
          "use_board_view": "boolean",
          "is_external_service": "boolean",
          "data_source": "string",
          "external_service_data": "any",
          "show_display_id_to_list": "boolean",
          "show_info_to_list": "boolean",
      },
      ...
    ],
    "error": undefined
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js',
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const hexabase = await createClient({ url: baseUrl, token: user.token});
  const [datastores, setDatastores] = useState([] as DatastoreRes[]);
  const projectID = "project_id_001";

  async function get(payload) {
    const { datastores, error } = await datastore.get(projectID);
    return datastores;
  }

  useEffect(() =>
  {
    const data = get(projectID);
    if (data) {
      setDatastores(data);
    }
    return;
  }, []); 
```

### - getDetail()

```ts
 /**
   * function getDetail: getDetail datastore
   * @params {string} datastoreId are requirement
   * @returns DatastoreSettingRes
   */
  public async getDetail(datastoreId: string): Promise<DatastoreSettingRes>
```

> Successful response Schema

```json
  {
    "datastoreSetting": {
        "id": "string",
        "names": "any",
        "roles": {
            "id": "string",
            "display_id": "string",
            "name": "string",
        },
        "display_id": "string",
        "fields": [
          {
            "id": "string",
            "display_name": "string",
            "display_id": "string",
            "names": "any",
            "data_type": "string",
            "search": "boolean",
            "show_list": "boolean",
            "as_title": "boolean",
            "status": "boolean",
            "field_index": "number",
            "title_order": "number",
            "full_text": "boolean",
            "unique": "boolean",
            "min_value": "string",
            "max_value": "string",
            "options": [
              {
                "_key": "string",
                "o_id": "string",
                "fieldID": "string",
              },
              ...
            ],
          },
          ...
        ],
        "field_layout": [
          {
            "id": "string",
            "display_id": "string",
            "col": "number",
            "row": "number",
            "size_x": "number",
            "size_y": "number",
          },
          ...
        ],
        "statuses": [
          {
            "id": "string",
            "display_id": "string",
            "names": "any",
          },
          ...
        ],
    },
    "error": undefined
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const hexabase = await createClient({ url: baseUrl, token: user.token});
  const [datastoreSetting, setDatastoreSetting] = useState({} as DatastoreSettingRes);
  const datastoreId = 'datastoreId_001';

  async function getDetail(payload) {
    const { datastoreSetting, error } = await datastore.getDetail(newDatastoreId);
    return datastoreSetting;
  }

  useEffect(() =>
  {
    const data = getDetail(datastoreId);
    if (data) {
      setDatastoreSetting(data);
    }
    return;
  }, []); 
```

### - create()

```ts
 /**
   * function create: create datastore
   * @params {CreateDatastoreFromSeedReq} payload are requirement
   * @returns CreateDatastoreFromSeedRes
   */
  public async create(payload: CreateDatastoreFromSeedReq): Promise<CreateDatastoreFromSeedRes>
```

> Successful response Schema

```json
  {
    "datastoreId": "string",
    "error": undefined
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const hexabase = await createClient({ url: baseUrl, token: user.token});
  const [datastoreId, setDatastoreId] = useState({} as CreateDatastoreFromSeedRes);

  async function create(payload) {
    const { datastoreId } = await datastore.create(payload);
    return datastoreId;
  }

  useEffect(() =>
  {
    const payload: CreateDatastoreFromSeedReq = {
      payload: {
        lang_cd: 'en',
        project_id: "project_id",
        template_name: "template_name",
        workspace_id: "workspace_id",
        user_id: "user_id",
      },
    };
    const data = create(payload);
    if (data) {
      setDatastoreId(data);
    }
    return;
  }, []); 
```

### - getField()

```ts
 /**
   * function getField: get field setting in Ds
   * @params {string} fieldId and {string} datastoreId are requirement
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

  async function getFieldSetting(fieldId, datastoreId) {
    const {dsField, error} = await hexabase.datastores.getField(fieldId, datastoreId);
    return dsField;
  }

  useEffect(() =>
  {
    const dsField = getFieldSetting(fieldId, datastoreId);
    if (dsField) {
      setField(dsField)
    }
    return;
  }, []); 
```

### - getActions()

```ts
  /**
   * function getActions: actions in datastore
   * @param  {string} datastoreId
   * @returns DsActionRes
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
      },
      ...
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
  const [dsAction, setDsAction] = useState([] as [DsAction]);

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


### - getStatuses()

```ts
  /**
   * get get statuses in datastore
   * @param  {string} datastoreId
   * @returns DsStatusRes
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
  const [dsStatus, setDsStatus] = useState([] as [DsStatus]);
  const datastoreId = '1234567890';
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

### - getAction()

```ts
  /**
   * function getAction: get field action setting in Ds
   * @param  {string} datastoreId, {string} actionId
   * @returns DsActionSettingRes
   */
  public async getAction(datastoreId: string, actionId: string): Promise<DsActionSettingRes>
```

> Successful response Schema

```json
  {
    "dsAction" : [
      {
        "workspace_id": "string",
        "project_id": "string",
        "datastore_id": "string",
        "action_id": "string",
        "is_status_action": "boolean",
        "display_id": "string",
        "operation": "string",
        "set_status": "string",
        "name": {
          "ja": "string",
          "en": "string",
        },
        "roles": [
          {
            "can_execute": "boolean",
            "can_use": "boolean",
            "project_id": "string",
            "type": "string",
            "name": "string",
            "display_id": "string",
            "role_id": "string",
          },
          ...
        ]
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
  const [dsAction, setDsAction] = useState([] as [DsAction]);
  const datastoreId = '1234567890';
  const hexabase = await createClient({ url: baseUrl, token: user.token});

  async function getAction(dsId) {
    const {dsAction, error} = await hexabase.datastores.getAction(dsId);
    return dsAction
  }

  useEffect(() =>
  {
    const dsAction = getAction(datastoreId);
    if (dsAction) {
      setDsStatus(dsAction)
    }
    return;
  }, []); 
```

### - updateDatastoreSetting()

```ts
 /**
   * function updateDatastoreSetting: update datastore
   * @params {DatastoreUpdateSetting} payload are requirement
   * @returns ModelRes
   */
  public async updateDatastoreSetting(payload: DatastoreUpdateSetting): Promise<ModelRes>
```

> Successful response Schema

```json
  {
    "data": {
      "success": "boolean",
      "data": "string",
    },
    "error": undefined,
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const hexabase = await createClient({ url: baseUrl, token: user.token});
  const [modelRes, setModelRes] = useState({} as ModelRes);

  async function update(payload) {
    const { data, error } = await datastore.updateDatastoreSetting(payload);
    return data;
  }

  useEffect(() =>
  {
    const payload: DatastoreUpdateSetting = {
      payload: {
        datastore_id: "datastore_id",
        display_id: "dsId_update_001",
        name: {
          en: "EN name update",
          ja: "JA name update"
        },
      }
    };
    const data = update(payload);
    if (data) {
      setModelRes(data)
    }
    return;
  }, []); 
```

### - deleteDatastore()

```ts
 /**
   * function deleteDatastore: delete datastore
   * @params {DatastoreUpdateSetting} payload are requirement
   * @returns ModelRes
   */
  public async deleteDatastore(datastoreId: string): Promise<ModelRes>
```

> Successful response Schema

```json
  {
    "data": {
      "success": "boolean",
      "data": "string",
    },
    "error": undefined,
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const hexabase = await createClient({ url: baseUrl, token: user.token});
  const [modelRes, setModelRes] = useState({} as ModelRes);

  async function delete(payload) {
    const { data, error } = await datastore.deleteDatastore(payload);
    return data;
  }

  useEffect(() =>
  {
    const datastoreId = "datastoreId";
    const data = delete(datastoreId);
    if (data) {
      setModelRes(data)
    }
    return;
  }, []); 
```