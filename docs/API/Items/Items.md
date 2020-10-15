---
title: Hexabase.Datastores.Items
---

### getItemsAsync

> TODO: add response schema

```ts
    /**
     * get items list of datastore, can also be used for search
     * @param  {ItemsReq} request
     * @returns Promise
     */
    public async getItemsAsync(request: ItemsReq): Promise<ItemsResp>
```

* ### usage 
```ts
    let item = new Items()
    var datastoreItems = await item.getItemsAsync({ 
        project_id: 'newproject', 
        datastore_id: 'newdb1', 
        per_page: 1, 
        page: 1, 
        use_display_id: true  
    })
```

### getItemSearchConditionsAsync

```ts
    /**
     * get datastore items search conditions, is also used in queries tab/menu
     * @param  {ItemsSearchConditionsReq} request
     * @returns Promise
     */
    public async getItemSearchConditionsAsync(request: ItemsSearchConditionsReq): Promise<ItemsSearchConditionsResp>
```

* ### usage
```ts
    var items = new Items();
    let searchConditionResp = await items.getItemSearchConditionsAsync({ project_id: 'newproject', datastore_id: 'newdb1' });
```

### getDatastoreItemDetailsAsync

```ts
    /**
     * get complete datastore item details
     * @param  {ItemDetailsReq} request
     * @returns Promise
     */
    public async getDatastoreItemDetailsAsync(request: ItemDetailsReq): Promise<ItemDetailsResp>
```

- ### usage
```ts
    var items = new Items();
    let datastoreItemDetails = items.getDatastoreItemDetailsAsync({ project_id: 'newproject', datastore_id: 'newdb1', item_id: '5b0faa3a00f7c300061dee4c' });
```