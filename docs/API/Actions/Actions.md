---
title: Hexabase.Actions
---
### getNewActionsAndFields()
#### [WIP]
```ts
    /**
     * get new action fields and other settings
     * @param  {ActionAndFieldsReq} request
     * @returns Promise
     */
    public async getNewActionsAndFields(request: ActionAndFieldsReq): Promise<any>
```

> Usages in TSX
```tsx
var actionAndFields = await actions.getNewActionsAndFields({ datastore_id: targetDatastore!.datastore_id, action_id: actionID })
```


### getNewActionByDatastoreID() 
#### [WIP]
```ts
    /**
     * get new-action by datastoreID
     * @param  {string} datastoreID
     * @returns Promise
     */
    public async getNewActionByDatastoreID(datastoreID: string): Promise<ActionsNewResp>
```

> Usages 
```tsx
var actionResp = await actions.getNewActionByDatastoreID(targetDatastore!.datastore_id);
```

### mapFieldsToIDs()
#### [WIP]
```ts
    /**
     * map user input fields to actions fields, then output payload according to hexabase requirements
     * @param  {any} actionAndFields
     * @param  {any} userPayload
     * @returns object
     */
    public mapFieldsToIDs(actionAndFields: any, userPayload: any): object
```

> Usages
```tsx
let items =  actions.mapFieldsToIDs(actionAndFields, payload)
```