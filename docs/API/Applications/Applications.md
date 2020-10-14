---
title: Hexabase.Applications
---

### getApplications

> get all user workspace applications list

```ts
    /**
     * get workspace applications list
     * @param  {GetApplicationsReq} getApplications
     * @returns Promise
     */
    public async getApplications(getApplications: GetApplicationsReq): Promise<Array<ApplicationsRootObj>>
```

> Successful response Schema

```json
[
  {
    "application_id": "string",
    "name": "string",
    "display_id": "string",
    "datastores": [
      {
        "datastore_id": "string",
        "did": "string",
        "display_id": "string",
        "name": "string"
      }
    ]
  }
]
```