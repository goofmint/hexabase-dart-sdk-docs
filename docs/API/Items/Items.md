---
title: Hexabase.Items
---


### <mark>Datastores</mark>
In Hexabase, each piece of data in the database is called an "Item". One row next to the table is the item. It corresponds to a general RDB record


In `Datastore` will have functions:
```bash
getItemsAsync() // get items in datastore
createNewItem() // create new item in datastore
getItemDetail() // get item detail
getItemsHistories() // get item histories
```


### getItemsAsync()

> get all items

```ts
    /**
     * get items list of datastore, can also be used for search
     * @param {GetItemsPl} getItemsParameters, {string} datastoreId, optional {string} projectId
     * @returns Promise
     */
    public async getItemsAsync(getItemsParameters: GetItemsPl, datastoreId: string, projectId?: string): Promise<DsItemsRes>
```

> Successful response Schema

```json
  {
    "dsItems" : [
      {
        "items": "any", // object have many items
        "totalItems": "number"
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
    const getItemsParameters = {
        'page': 1,
        'per_page': 0
    }
    const hexabase = await createClient({ url: baseUrl, token: user.token});

    const [item, setItem] = useState({} as DsItems);

    async function getItems(id) {
      const {dsItems, error} = await hexabase.items.getItemsAsync(getItemsParameters, datastoreId, projectId);
      return dsItems;
    }

    useEffect(() =>
    {
      const dsItems = getItems(getItemsParameters, datastoreId, projectId);
      if (dsItems) {
        setItem(dsItems);
      }
      return;
    }, []); 
```

### createNewItem()

> create new item

```ts
  /**
   * create new Item
   * @param {CreateNewItemPl} newItemPl, {string} datastoreId, {string} projectId
   * @returns Promise
   */
  public async createNewItem(projectId, datastoreId, newItemPl): Promise<NewItemRes>
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
      const {itemNew, error} = await hexabase.items.createNewItem(projectId, datastoreId, newItemPl);
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

### getItemDetail()

> get item detail

```ts
  /**
   * get item detail in datastore
   * @param {string} datastoreId, optimal {string} projectId, {GetItemDetailPl} itemDetailParams
   * @returns Promise
   */
  public async getItemDetail( datastoreId, itemId, projectId, itemDetailParams): Promise<ItemDetailRes>
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

    const [item, setItem] = useState({} as NewItem);

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

### getItemsHistories()

> get item histories

```ts
  /**
   * get item histories
   * @param {string} projectId, {string} datastoreId, {string} itemId, optimal : {GetHistoryPl} historyParams
   * @returns Promise
   */
  public async getItemsHistories(projectId: string, datastoreId: string, itemId: string, historyParams?: GetHistoryPl ): Promise<ItemHistoriesRes>
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
          }
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
    const historyParams = {
      'from_index': 0,
      'to_index': 1
    };

    const hexabase = await createClient({ url: baseUrl, token: user.token})

    const [itemHis, setItemHis] = useState({} as NewItem);

    async function itemsHistories(projectId: string, datastoreId: string, itemId: string, historyParams?: GetHistoryPl ) {
      const {itemHistories, error} = await hexabase.items.getgetItemsHistoriesItemDetail(projectId, datastoreId, itemId, historyParams);
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