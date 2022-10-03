---
title: Hexabase.Workspaces
---

### <mark>Workspace</mark>
We start by getting, and setting our App workspaces using the the below API. after getting the list of workspaces, we can choose which one to work to display our projects, datastores, and so on.

In `Workspace` will have functions:
```bash
get() // get workspaces
create() // created workspace
setCurrent() // set current workspace by id
setCurrent() // set the current user workspace by workspace_id
getCurrent() // get workspaces id current
getPasswordPolicy() // get workspace password policy
getFunctionality() // get workspace functionality
getUsage() // get workspace usage
getGroupChildren() // get workspace children in group
getTaskQueueList() // get queue list
getTaskQueueStatus() // get task queue status
```

### - get()
```ts
 /**
   * function getWorkspacesAsync: get workspaces and current workspace id
   * @returns WorkspacesRes
   */
  public async get(): Promise<WorkspacesRes>
```

> Successful response Schema

```json
{
  "workspaces": {
    "workspaces": [
      {
        "workspace_name": "620e2780bb0b83cfd6b831f6",
        "workspace_id": "620f5774bb0b83cfd6b83d8f"
      },
      {
        "workspace_name": "Test_run_linker_api",
        "workspace_id": "624ac2f3cbb42c82793c10e6"
      },
      {
        "workspace_name": "new Workspace",
        "workspace_id": "624bc3cfa72c942744ee6635"
      }
    ],
    "current_workspace_id": "624ac2f3cbb42c82793c10e6"
  },
  "error": undefined
}
```

- ### usage (tsx next)
```tsx
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));

  const hexabase = await createClient({ url: baseUrl, token: user.token})


  const [workspaces, setWorkspaces] = useState([] as WorkspacesRes[]);

  useEffect(() =>
  {
    hexabase.workspaces.get().then(resp => setWorkspaces(resp.workspaces));

    return;
  }, []);    
```

### - create()

```ts
  /**
   * function create: created workspace
   * @param: createWorkSpaceInput: {name}
   * @returns WorkspaceIDRes
   */
  async create(createWsInput: CreateWsInput): Promise<WorkspaceIDRes>
```

> Successful response Schema

```json
{
  "w_id": "624ac2f3cbb42c82793c10e6",
  "error": undefined
}
```

- ### usage (tsx next)
```tsx
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));

  const hexabase = await createClient({ url: baseUrl, token: user.token})
  const [workspace, setWorkspace] = useState([] as string);
  const createWsInput = {
    name: "name";
  }
  useEffect(() =>
  {
    hexabase.workspaces.create(createWsInput).then(resp => setWorkspace(resp.w_id));

    return;
  }, []);    
```

### - setCurrent()

```ts
  /**
   * set the current user workspace by workspace_id
   * @param  {SetWsInput} SetWsInput: include workspace_id
   * @returns Promise
   */
  public async setCurrent(setCurrentWsPl: SetWsInput): Promise<ModelRes>
```

> Successful response schema

```json
  {
    "data": {
      "success": true,
    },
    "error": undefined,
  }
```


- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';
    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const setCurrentWsPl = {
      workspace_id: workspaceIdSet
    }
    const hexabase = await createClient({ url: baseUrl, token: user.token})

    const [workspaceCurrent, setWorkspaceCurrent] = useState([] as WorkspacesRes[]);

    useEffect(() =>
    {
      hexabase.workspaces.setCurrent(setCurrentWsPl).then(resp => {
        if(resp.data.success) {
          setWorkspaceCurrent(setCurrentWsPl.workspace_id);
        }
      });

      return;
    }, []);    
```

### - getCurrent()

```ts
  /**
   * get workspaces id current
   * @returns WorkspaceCurrentRes
   */
  public async getCurrent(): Promise<WorkspaceCurrentRes>
```

> Successful response schema

```json
  {
    "wsCurrent": { 
      "workspace_id": "632ad81082bd898623884d2b" 
    },
    "error": undefined,
  }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [workspaceCurrent, setWorkspaceCurrent] = useState([] as WorkspacesRes[]);

    useEffect(() =>
    {
      hexabase.workspaces.getCurrent().then(resp => setWorkspaces(resp.wsCurrent));
      return;
    }, []);
```

### - getPasswordPolicy()

```ts
  /**
   * function getPasswordPolicy: get workspace password policy
   * @param {string} workspaceId
   * @returns WsPasswordPolicyRes
   */
  public async getPasswordPolicy(workspaceId: string): Promise<WsPasswordPolicyRes>
```

> Successful response schema

```json
    {
      "wsPasswordPolicy": {
        "expired_day": 30,
        "lockout_count": 5,
        "lockout_time": 5,
        "min_length": 6,
        "pattern_check_type": 0,
        "same_limit": 2,
        "use_expired_day": false,
        "use_lockout_count": false,
        "use_lockout_time": false,
        "use_min_length": false,
        "use_pattern_check": false,
        "use_same_limit": false
      },
      "error": undefined
    }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const workspaceId = process.env.WORKSPACEID;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [workspaceCurrent, setWorkspaceCurrent] = useState([] as WorkspacesRes[]);

    useEffect(() =>
    {
      hexabase.workspaces.getPasswordPolicy(workspaceId).then(resp => setWorkspaces(resp.wsPasswordPolicy));
      return;
    }, []);
```

### - getFunctionality()

```ts
  /**
   * function getFunctionality: get workspace functionality
   * @param {string} workspaceId
   * @returns WsPasswordPolicyRes
   */
  public async getPasswordPolicy(workspaceId: string): Promise<WsPasswordPolicyRes>
```

> Successful response schema

```json
     {
      "wsFunctionality": {
        "w_id": "624ac2f3cbb42c82793c10e6",
        "ws_functions": {
          "use_global_search": true,
          "use_beta": false,
          "use_password_policy": true,
          "use_create_workspace": 2
        },
        "app_functions": {
          "use_dashboards": true,
          "use_queries": true,
          "use_create_application": true,
          "use_reports": true
        }
      },
      "error": undefined
    }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const workspaceId = process.env.WORKSPACEID;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [workspaceCurrent, setWorkspaceCurrent] = useState([] as WorkspacesRes[]);

    useEffect(() =>
    {
      hexabase.workspaces.getPasswordPolicy(workspaceId).then(resp => setWorkspaces(resp.wsFunctionality));
      return;
    }, []);
```

### - getUsage()

```ts
  /**
   * function getUsage: get workspace usage
   * @param {string} workspaceId
   * @returns WsUsageRes
   */
  public async getUsage(workspaceId: string): Promise<WsUsageRes>
```

> Successful response schema

```json
     {
      "wsUsage": {
        "w_id": "632ae4bf0aaae33f4971612b",
        "usage": {
          "users": 1,
          "users_limit": 3,
          "storage": 0,
          "storage_limit": 50,
          "items": 0,
          "items_limit": 0,
          "datastores_limit": 5,
          "datastores": 0
        }
      },
      "error": undefined
    }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const workspaceId = process.env.WORKSPACEID;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [workspaceCurrent, setWorkspaceCurrent] = useState([] as WorkspacesRes[]);

    useEffect(() =>
    {
      hexabase.workspaces.getPasswordPolicy(workspaceId).then(resp => setWorkspaces(resp.wsUsage));
      return;
    }, []);
```

### - getGroupChildren()

```ts
  /**
   * function getGroupChildren: get workspace children in group
   * @param {string} workspaceId
   * @returns WsGroupChildrenRes
   */
  public async getGroupChildren(workspaceId: string): Promise<WsGroupChildrenRes>
```

> Successful response schema

```json
    {
      "wsGroupChildren": {
        "error": "",
        "group": {
          "index": 0,
          "name": "WORKSPACE.DEFAULT_GROUP_NAME",
          "group_id": "Grp-jhiDUaJm",
          "g_id": "632ae5ec82bd898623884d5a"
        },
        "children": [],
        "count": 0
      },
      "error": undefined
    }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const workspaceId = process.env.WORKSPACEID;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [workspaceCurrent, setWorkspaceCurrent] = useState([] as WorkspacesRes[]);

    useEffect(() =>
    {
      hexabase.workspaces.getGroupChildren(workspaceId).then(resp => setWorkspaces(resp.wsGroupChildren));
      return;
    }, []);
```

### - getTaskQueueList()

```ts
  /**
   * function getTaskQueueList: get queue list
   * @param {string} workspaceId or none, {QueryTaskList}: queryTaskList or none
   * @returns TaskQueueListRes
   */
  public async getTaskQueueList(workspaceId?: string, queryTaskList?: QueryTaskList): Promise<TaskQueueListRes>
```

> Successful response schema

```json
    { 
      "taskQueueList": {}, 
      "error": undefined 
    }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [workspaceCurrent, setWorkspaceCurrent] = useState([] as WorkspacesRes[]);

    useEffect(() =>
    {
      hexabase.workspaces.getTaskQueueList().then(resp => setWorkspaces(resp.taskQueueList));
      return;
    }, []);
```

### - getTaskQueueStatus()

```ts
  /**
   * function getTaskQueueStatus: get task queue status
   * @param  {string} taskId and {string} workspaceId are required
   * @returns TaskQueueListRes
   */
  public async getTaskQueueStatus(taskId: string, workspaceId: string): Promise<TaskQueueStatusRes>
```

> Successful response schema

```json
    { 
      "taskQueueStatus": {
      "qt_id": "string",
      "category": "string",
      "status": {
        "id": "string",
        "name": "string",
      },
      "created_at": "string",
      "started_at": "string",
      "finished_at": "string",
      "metadata": {
        "w_id": "string",
      },
    }, 
      "error": undefined 
    }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const workspaceId = process.env.WORKSPACEID;
    const taskId = process.env.TASKID;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [workspaceCurrent, setWorkspaceCurrent] = useState([] as WorkspacesRes[]);

    useEffect(() =>
    {
      hexabase.workspaces.getTaskQueueStatus(taskId, workspaceId).then(resp => setWorkspaces(resp.taskQueueStatus));
      return;
    }, []);
```