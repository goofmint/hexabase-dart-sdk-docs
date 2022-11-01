---
title: Hexabase.Projects
---

### <mark>Project</mark>
Project further lists down all essential groups of data stores available for use to use in managing data.


In `Project` will have functions:
```bash
get() // get Project list
getProjectsAndDatastores() // get Project and datastores list
create() // create a Project
getDetail() // get info project
updateProjectTheme() //  update Project theme
updateProjectName() //  update Project name
delete() //  delete Project
```

### - get()

> get all user workspace Project and datastores list

```ts
  /**
   * get Project and datastores list
   * @param  {string} workspaceId
   * @returns ApplicationRes
   */
  public async get(workspaceId: string): Promise<ApplicationRes>
```

> Successful response Schema

```json
  {
    "getApplications" : [
      {
        "application_id": "string",
        "name": "string",
        "display_id": "string",
        "theme": "string",
        "display_order": "number",
      },
      ...
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
    const [apps, setApps] = useState([] as [ApplicationRes]);

    async function getApps(wId) {
      const {appAndDs, error} = await hexabase.applications.get(wId);
      return appAndDs;
    }

    useEffect(() =>
    {
      const workspaceId = '12345678';
      const apps = getApps(workspaceId);
      if (apps && apps.length > 0) {
        setApps(apps);
      }
      return;
    }, []); 
```


### - getProjectsAndDatastores()

> get all user workspace Project and datastores list

```ts
  /**
   * get Project and datastores list
   * @param  {string} workspaceId
   * @returns Promise
   */
  public async getProjectsAndDatastores(workspaceId: string): Promise<AppAndDsRes>
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
            "name": "string"
          },
          ....
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


    const [appDs, setAppDs] = useState([] as [ApplicationAndDataStore]);

    async function getAppAndDs(wId) {
      const {appAndDs, error} = await hexabase.applications.getProjectsAndDatastores(wId);
      return appAndDs;
    }

    useEffect(() =>
    {
      const workspaceId = '12345678';
      const appAndDs = getAppAndDs(workspaceId);
      if (appAndDs && appAndDs.length > 0) {
        setAppDs(appAndDs);
      }
      return;
    }, []); 
```


### - getDetail()

```ts
  /**
   * function getDetail: get info project
   * @params {string} projectId
   * @returns ReportDataRes
   */
  public async getDetail(projectId: string): Promise<ProjectInfoRes>
```

> Successful response Schema

```json
  {
    "project" : {
        "display_id": "string",
        "display_order": 0,
        "name": "string",
        "p_id": "string",
        "template_id": "string",
        "w_id": "string",
    },
    "error": undefined
  }
```

- ### usage (tsx next)
```ts
  import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const [project, setProject] = useState({} as [ReportListItem]);

    const hexabase = await createClient({ url: baseUrl, token: user.token});

    async function getInfoProject(projectId: string) {
      const {project, error} = await application.get(projectId);
      return project;
    }

    useEffect(() =>
    {
      const projectId = "1234567890";
      const project = getReportsProject(projectId);
      if(project) {
        setReportsProject(reports)
      }
      return;
    }, []); 
```

### - create()

```ts
  /**
   * create Project in current workspace
   * @param  {CreateProjectPl} createProjectParams
   * @returns Promise
   */
  public async create(createProjectParams: CreateProjectPl): Promise<CreateAppRes>
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
    const [appCreated, setAppCreated] = useState({} as CreateApp);
    const hexabase = await createClient({ url: baseUrl, token: user.token});

    async function createApplication(createProjectParams) {
      const { app, error } = await hexabase.applications.create(createProjectParams);
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
      if(app) {
        setAppCreated(app)
      }
      return;
    }, []); 
```

### - updateProjectTheme()

```ts
  /**
   * function updateProjectTheme: update project theme in workspace
   * @params {UpdateProjectThemePl} payload is requirement
   * @returns ModelRes
  */
  public updateProjectTheme(payload: UpdateProjectThemePl): Promise<ModelRes>
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
    const [data, setData] = useState({} as [UpdateProjectTheme]);

    const hexabase = await createClient({ url: baseUrl, token: user.token});

    async function updateProjectTheme(payload: UpdateProjectThemePl) {
      const { data, error } = await hexabase.applications.updateProjectTheme(payload);
      return data;
    }

    useEffect(() =>
    {
      const payload: UpdateProjectThemePl = {
        payload: {
            project_id: "project_id",
            theme: "theme", // theme includes "blue" | "white" | "gray" | "black";
          }
      };
      const data = updateProjectTheme(payload);
      if (data) {
        setData(data);
      }
      return;
    }, []); 
```

### - updateProjectName()

```ts
  /**
   * function updateProjectName: update project name in workspace
   * @params {UpdateProjectNamePl} payload is requirement
   * @returns ModelRes
  */
  public updateProjectName(payload: UpdateProjectNamePl): Promise<ModelRes>
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
    const [data, setData] = useState({} as [UpdateProjectName]);

    const hexabase = await createClient({ url: baseUrl, token: user.token});

    async function updateProjectName(payload: UpdateProjectNamePl) {
      const { data, error } = await hexabase.applications.updateProjectName(payload);
      return data;
    }

    useEffect(() =>
    {
      const payload: UpdateProjectNamePl = {
        payload: {
          project_id: "project_id",
          project_displayid: "project_displayid",
          project_name: {
            en: "pj_name001",
            ja: "pj_name001",
          },
        }
      }
      const data = updateProjectName(payload);
      if (data) {
        setData(data);
      }
      return;
    }, []); 
```

### - delete()

```ts
  /**
   * function delete: delete project in workspace
   * @params {DeleteProjectPl} payload is requirement
   * @returns ModelRes
  */
  public delete(payload: DeleteProjectPl): Promise<ModelRes>
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
    const [data, setData] = useState({} as [DeleteProject]);

    const hexabase = await createClient({ url: baseUrl, token: user.token});

    async function delete(payload: UpdateProjectNamePl) {
      const { data, error } = await hexabase.applications.delete(payload);
      return data;
    }

    useEffect(() =>
    {
      const payload: DeleteProjectPl = {
        payload: {
          project_id: "project_id",
        }
      };
      const data = delete(payload);
      if (data) {
        setData(data);
      }
      return;
    }, []); 
```