---
title: Hexabase.Items
---


### <mark>Datastores</mark>
In Hexabase, each piece of data in the database is called an "Item". One row next to the table is the item. It corresponds to a general RDB record


In `Datastore` will have functions:
```bash
get() // get items in datastore
create() // create new item in datastore
delete() // delete item in datastore
update() // update item in datastore
execute() // execute action item in datastore 
getHistories() // get item histories
createItemId() // create Itemid
getItemDetail() // get item detail
getItemRelated() // get item related in datastore
```


### - get()

```ts
  /**
   * get items list of datastore, can also be used for search
   * @param {GetItemsPl} params, {string} datastoreId, optional {string} projectId
   * @returns DsItemsRes
   */
  public get(datastoreId: string, params: GetItemsPl, projectId?: string): Promise<DsItemsRes>
```

> Successful response Schema

```json
  {
    "dsItems" :
      {
        "items": "any", // object have many items
        "totalItems": "number"
      }
    ,
    "error": undefined
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'))
    const params = {
      'page': number;
      'per_page': number;
    }
    const hexabase = await createClient({ url: baseUrl, token: user.token});

    const [item, setItem] = useState({} as DsItems);

    async function getItems(id) {
      const {dsItems, error} = await hexabase.items.get(datastoreId, params, projectId);
      return dsItems;
    }

    useEffect(() =>
    {
      const dsItems = getItems(datastoreId, params, projectId);
      if (dsItems) {
        setItem(dsItems);
      }
      return;
    }, []); 
```

### - create()

```ts
  /**
   * create new Item
   * @param {createPl} newItemPl, {string} datastoreId, {string} projectId
   * @returns NewItemRes
   */
  public async create(projectId, datastoreId, newItemPl): Promise<NewItemRes>
```

> Successful response Schema

```json
  {
    "itemNew" : [
      {
        "error": "any",
        "item": "any",
        "history_id": "string",
        "item_id": "string"
      }
    ],
  "error": undefined
}
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'))
    const projectId = 'projectId';
    const datastoreId = 'datastoreId';
    const actionId = 'actionId';
    const newItemPl =  {
      'action_id': `${actionId}`,
      'use_display_id': true,
      'return_item_result': true,
      'ensure_transaction': false,
      'exec_children_post_procs': true,
      'access_key_updates': {
          'overwrite': true,
          'ignore_action_settings': true
      },
      'item': {
          'param1' : 'field_id' ,
          'param2': 'TITLE test',
          'param3' : 'person in charge'
      }
    };

    const hexabase = await createClient({ url: baseUrl, token: user.token})

    const [item, setItem] = useState({} as NewItem);

    async function createItem(projectId, datastoreId, newItemPl) {
      const {itemNew, error} = await hexabase.items.create(projectId, datastoreId, newItemPl);
      return itemNew;
    }

    useEffect(() =>
    {
      const itemNew = getItems(projectId, datastoreId, newItemPl)
      if (itemNew) {
        setItem(itemNew);
      }
      return;
    }, []); 
```

### - getItemDetail()

> get item detail

```ts
  /**
   * get item detail in datastore
   * @param {string} datastoreId, {string} itemId, {string} projectId, {GetItemDetailPl} itemDetailParams
   * @returns ItemDetailRes
   */
  public async getItemDetail( datastoreId: string, itemId: string, projectId?: string, itemDetailParams?: GetItemDetailPl): Promise<ItemDetailRes>
```

> Successful response Schema

```json
  {
    "itemDetails" : 
      {
        "title": "string",
        "rev_no": "number",
        "field_values": "any",
        "status_list": "any",
        "status_actions": "any",
        "item_actions": "any",
        "status_order": "any",
        "status_action_order": "any",
        "item_action_order": "any",
      },
  "error": undefined
}
```
- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'))
    const datastoreId = 'datastoreId';
    const itemId = 'itemId';

    const hexabase = await createClient({ url: baseUrl, token: user.token})

    const [item, setItem] = useState({} as ItemDetail);

    async function itemDetail(datastoreId, itemId) {
      const {itemDetails, error} = await hexabase.items.getItemDetail(datastoreId, itemId);
      return itemDetails;
    }

    useEffect(() =>
    {
      const itemDetails = itemDetail(datastoreId, itemId)
      if (itemDetails) {
        setItem(itemDetails);
      }
      return;
    }, []); 
```

### - getHistories()

```ts
  /**
   * get item histories
   * @param {string} projectId, {string} datastoreId, {string} itemId, optimal : {GetHistoryPl} historyParams
   * @returns ItemHistoriesRes
   */
  public async getHistories(projectId: string, datastoreId: string, itemId: string, historyParams?: GetHistoryPl ): Promise<ItemHistoriesRes>
```

> Successful response Schema

```json
  {
    "itemHistories" : 
      {
        "histories": [
         {
            "history_id": "string",
            "display_order": "number",
            "is_unread": "boolean",
            "comment": "string",
            "created_at": "string",
            "action_id": "string",
            "action_name": "string",
            "transaction_id": "string",
            "action_operation": "string",
            "is_status_action": "boolean",
            "datastore_id": "string",
            "datastore_name": "string",
            "user_id": "string",
            "username": "string",
            "email": "string",
            "updated_by": "string",
            "updated_at": "string",
            "media_link": "string",
            "is_updated": "boolean"
          },
          ...
        ],
        "unread": "number",
      },
  "error": undefined
}
```
- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'))
    const datastoreId = 'datastoreId';
    const itemId = 'itemId';
    const projectId = 'projectId';
    const historyParams = {
      'from_index': 0,
      'to_index': 1
    };

    const hexabase = await createClient({ url: baseUrl, token: user.token})

    const [itemHis, setItemHis] = useState({} as ItemHistories);

    async function itemsHistories(projectId: string, datastoreId: string, itemId: string, historyParams?: GetHistoryPl ) {
      const {itemHistories, error} = await hexabase.items.getHistories(projectId, datastoreId, itemId, historyParams);
      return itemHistories;
    }

    useEffect(() =>
    {
      const itemHistories = itemsHistories(projectId, datastoreId, itemId, historyParams)
      if (itemHistories) {
        setItemHis(itemHistories);
      }
      return;
    }, []); 
```

### - update()

```ts
 /**
   * function update: get field action setting in Ds
   * @params {string} projectId, {string} datastoreId, {string} itemId and {ItemActionParameters} itemActionParameters is requirement
   * @returns ModelRes
   */
  public async update( projectId: string, datastoreId: string, itemId: string, itemActionParameters: ItemActionParameters): Promise<ModelRes>
```

> Successful response Schema

```json
  {
    "data" : {
      "success": "boolean",
      "data": "string",
    },
    "error": undefined
  }
```
- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const datastoreId = 'datastoreId';
    const itemId = 'itemId';
    const projectId = 'projectId';
    const itemActionParameters = {
        'rev_no': revNo,
        'datastore_id': datastoreId,
        'action_id': actionIdUpdate,
        'history': {
          'comment': 'unitest update item command',
          'datastore_id':  datastoreId
      }
    };

    const hexabase = await createClient({ url: baseUrl, token: user.token})

    const [data, setData] = useState({} as ModelRes);

    async function update(projectId: string, datastoreId: string, itemId: string, itemActionParameters?: GetHistoryPl ) {
      const {data, error} = await hexabase.items.update(projectId, datastoreId, itemId, itemActionParameters);
      return data;
    }

    useEffect(() =>
    {
      const data = update(projectId, datastoreId, itemId, itemActionParameters)
      if (data) {
        setData(data);
      }
      return;
    }, []); 
```

### - delete()

```ts
  /**
   * function delete: delete item in datastore
   * @params {string} projectId, {string} datastoreId, {string} itemId and {DeleteItemReq} deleteItemReq is requirement
   * @returns ModelRes
   */
  public async delete( projectId: string, datastoreId: string, itemId: string, deleteItemReq: DeleteItemReq): Promise<ModelRes>
```

> Successful response Schema

```json
  {
    "data" : {
      "success": "boolean",
      "data": "string",
    },
    "error": undefined
  }
```
- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const datastoreId = 'datastoreId';
    const itemId = 'itemId';
    const projectId = 'projectId';
    const historyParams = {
      "a_id": "1234567890";
    };

    const hexabase = await createClient({ url: baseUrl, token: user.token})

    const [data, setData] = useState({} as ModelRes);

    async function delete(projectId: string, datastoreId: string, itemId: string, historyParams?: GetHistoryPl ) {
      const {data, error} = await hexabase.items.delete(projectId, datastoreId, itemId, historyParams);
      return data;
    }

    useEffect(() =>
    {
      const data = delete(projectId, datastoreId, itemId, historyParams)
      if (data) {
        setData(data);
      }
      return;
    }, []); 
```

### - createItemId()

```ts
  /**
   * function createItemId: create Itemid
   * @params {string} datastoreId is requirement
   * @returns CreatedItemIdRes
   */
  public async createItemId(datastoreId: string): Promise<CreatedItemIdRes>
```

> Successful response Schema

```json
  {
    "item_id": "string",
    "error": undefined
  }
```
- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const datastoreId = 'datastoreId';
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [itemId, setItemId] = useState({} as CreatedItemId);

    async function createItemId(datastoreId: string) {
      const {item_id, error} = await hexabase.items.createItemId(datastoreId);
      return item_id;
    }

    useEffect(() =>
    {
      const item_id = createItemId(datastoreId);
      if (item_id) {
        setData(item_id);
      }
      return;
    }, []); 
```

### - getItemRelated()

```ts
  /**
   * function getItemRelated: get item related in datastore
   * @params {string} datastoreId, {string} itemId and {string} linkedDatastoreId is requirement
   * @returns ItemLinkedRes
   */
  public async getItemRelated( datastoreId: string, itemId: string, linkedDatastoreId: string ): Promise<ItemLinkedRes>
```

> Successful response Schema

```json
  {
    "itemLinked": {
        "items"?: "any",
        "datastore_id": "string",
        "stateflowActions"?: {
            "ID"?: "string",
            "a_id"?: "string",
            "display_id"?: "string",
            "w_id"?: "string",
            "p_id"?: "string",
            "d_id"?: "string",
            "name"?: "string",
            "status_id"?: "string",
            "is_status_action"?: "boolean",
            "display_order"?: "number",
            "description"?: "string",
            "show_in_home"?: "boolean",
            "pin_by_default"?: "boolean",
            "search_keys"?: "string",
            "operation"?: "string",
            "set_status"?: "string",
            "send_mail"?: "boolean",
            "isOwnedBySystem"?: "boolean",
            "AccessKeys"?: any,
            "action_script"?: {
              "lang": "string",
              "enabled": "boolean",
              "script": "string",
            },
            "CreatedAt"?: "string",
            "UpdatedAt"?: "string",
        },
        "fields"?: {
            "id"?: "string",
            "f_id"?: "string",
            "w_id"?: "string",
            "p_id"?: "string",
            "d_id"?: "string",
            "field_csv_name"?: "string",
            "display_name"?: "string",
            "name"?: {
              "en": "string",
              "ja": "string",
            },
            "display_id"?: "string",
            "dataType"?: "string",
            "search"?: "boolean",
            "show_list"?: "boolean",
            "as_title"?: "boolean",
            "status"?: "boolean",
            "fieldIndex"?: "number",
            "title_order"?: "number",
            "full_text"?: "boolean",
            "unique"?: "boolean",
            "min_value"?: "string",
            "max_value"?: "string",
            "hideOnInput"?: "boolean",
            "hide_from_api"?: "boolean",
            "has_index"?: "boolean",
        },
        "column_settings": "any",
      },
    "error": undefined
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const datastoreId = 'datastoreId';
    const itemId = 'itemId';
    const linkedDatastoreId = 'linkedDatastoreId';
    const hexabase = await createClient({ url: baseUrl, token: user.token});
    const [itemLinked, setItemLinked] = useState({} as ItemLinked);

    async function getItemRelated( datastoreId: string, itemId: string, linkedDatastoreId: string ) {
      const {itemLinked, error} = await hexabase.items.getItemRelated( datastoreId, itemId, linkedDatastoreId );
      return itemLinked;
    }

    useEffect(() =>
    {
      const itemLinked = getItems(datastoreId, params, projectId);
      if (itemLinked) {
        setItemLinked(itemLinked);
      }
      return;
    }, []); 
```

### - execute()

```ts
/**
   * function execute: execute action item in datastore
   * @params {string} projectId, {string} datastoreId, {string} itemId, {string} actionId and {ItemActionParameters} itemActionParameters is requirement
   * @returns ModelRes
   */
  public async execute( projectId: string, datastoreId: string, itemId: string, actionId: string, itemActionParameters: ItemActionParameters): Promise<ModelRes>
```

> Successful response Schema

```json
  {
    "data" : {
      "success": "boolean",
      "data": "string",
    },
    "error": undefined
  }
```
- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const datastoreId = 'datastoreId';
    const itemId = 'itemId';
    const projectId = 'projectId';
    const itemActionParameters = {
      "action_id"?: "string";
      "rev_no"?: "number";
      "use_display_id"?: "boolean";
      "is_notify_to_sender"?: "boolean";
      "ensure_transaction"?: "boolean";
      "exec_children_post_procs"?: "boolean";
      "datastore_id"?: "string";
      "comment"?: "string";
      "changes"?: "any";
      "item"?: "any";
      "groups_to_publish"?: "any";
      "is_force_update"?: "boolean";
      "return_item_result"?: "boolean";
      "return_actionscript_logs"?: "boolean";
      "disable_linker"?: "boolean";
      "as_params"?: "any";
      "related_ds_items"?: "any";
    };

    const hexabase = await createClient({ url: baseUrl, token: user.token})

    const [data, setData] = useState({} as ModelRes);

    async function execute( projectId: string, datastoreId: string, itemId: string, actionId: string, itemActionParameters: ItemActionParameters) {
      const {data, error} = await hexabase.items.execute(projectId, datastoreId, itemId, itemActionParameters);
      return data;
    }

    useEffect(() =>
    {
      const data = execute(projectId, datastoreId, itemId, itemActionParameters);
      if (data) {
        setData(data);
      }
      return;
    }, []); 
```