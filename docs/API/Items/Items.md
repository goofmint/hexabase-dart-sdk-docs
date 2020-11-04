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

* ### usage (tsx react+redux)
```ts
    export const fetchDatastoreItems = (datastore: any, project_id: string) => async (dispatch: any) => {
        let items = await Hexabase.items().getItemsAsync({
            project_id: project_id,
            datastore_id: datastore.datastore_id,
            per_page: 1, 
            page: 1, 
            use_display_id: true        
        });
        var payload = {} as any;
        payload.cols = Object.keys(items.items[0]).filter(a => !exceptId.includes(a));
        payload.items = items.items;
        dispatch(setDatastoreItemsAndCols(payload))
    }
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

### createItemAsync (Alpha)

```ts
    /**
     *  create new datastore item by using new-action
     * @param  {{datastore_id:string} request
     * @param  {string} project_id
     * @param  {boolean} use_display_id?
     * @param  {boolean} is_notify_to_sender?
     * @param  {{}} item?
     * @param  {{}} related_ds_items?
     * @param  {boolean}} return_item_result?
     * @param  {any} payload
     * @returns Promise
     */
    public async createItemAsync(request: { 
            datastore_id: string, 
            project_id: string, 
            use_display_id?: boolean, 
            is_notify_to_sender?: boolean,
            item?: {}, 
            related_ds_items?: {}, 
            return_item_result?: boolean 
        }, 
        payload: any): Promise<NewItemActionResp>
```

- ### usage
```ts
    // TODO need more refactor
    // simplify ws, pj, and dt selectors..
    let ws = new Workspaces();
    var currentWs = await ws.getWorkspacesAsync();

    let application = new Applications();
    var applicationsList = await application.getApplications({ workspace_id: currentWs.workspaces[0].workspace_id });

    if(applicationsList[0] && applicationsList[0].datastores[0])
    {
        var item = new Items();
        
        let datastoreID = applicationsList[0].datastores[0].datastore_id; // TODO need improvements selecting datastore_id

        // create new item
        let newItemsResult = await item.createItemAsync({ 
            datastore_id: datastoreID, 
            project_id: 'newproject'
        },
        { Title: `testing ${Date.now()}` }); // payload using normal ID instead of field_id
        console.log(newItemsResult)
    }
```