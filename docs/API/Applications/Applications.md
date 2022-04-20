---
title: Hexabase.Applications
---

### <mark>Applications</mark>
Applications further lists down all essential groups of data stores available for use to use in managing data.


In `Application` will have functions:
```bash
getApplications() // get applications and datastores list
createAppAsync() // create a application
```


### getApplications()

> get all user workspace applications and datastores list

```ts
  /**
   * get workspace applications and datastores list
   * @param  {GetApplicationsReq} getApplications
   * @returns Promise
   */
  public async getAppAndDsAsync(workspaceId: string): Promise<AppAndDsRes>
```

> Successful response Schema

```json
  {
    "appAndDs" : [
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
    ],
  "error": undefined
}
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token});


    const [appDs, setAppDs] = useState([] as AppAndDsRes[]);

    async function getAppAndDs(wId) {
      const {appAndDs, error} = await hexabase.applications.getAppAndDsAsync(wId);
      return appAndDs;
    }

    useEffect(() =>
    {
      const workspaceId = '12345678';
      const appAndDs = getAppAndDs(workspaceId);
      return;
    }, []); 
```

### createAppAsync()

```ts
  /**
   * create application in current workspace
   * @param  {CreateProjectPl} createProjectParams
   * @returns Promise
   */
  public async createAppAsync(createProjectParams: CreateProjectPl): Promise<CreateAppRes>
```

> Successful response Schema

```json
  {
    "app" : {
      "project_id": "string"
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

    async function createApplication(createProjectParams) {
      const { app, error } = await hexabase.applications.createAppAsync(createProjectParams);
      return app;
    }

    useEffect(() =>
    {
      const paramNewPj: CreateProjectPl = {
        tp_id: '798798798',
        name: {
          en: 'EN Project',
          ja: 'JA Project',
        }
      };
      const app = createApplication(paramNewPj);
      return;
    }, []); 
```

