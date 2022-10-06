---
title: Hexabase.Workspaces
---

### <mark>Workspace</mark>
We start by getting, and setting our App workspaces using the the below API. after getting the list of workspaces, we can choose which one to work to display our projects, datastores, and so on.

In `Workspace` will have functions:
```bash
get() // get workspaces
create() // created workspace
update() // update workspace settings
getDetail() // get workspaces id current
setCurrent() // set current workspace by id
getCurrent() // get current id workspace
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
        "workspace_name": "string",
        "workspace_id": "string"
      },
      ...
    ],
    "current_workspace_id": "string"
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
  "w_id": "string",
  "error": undefined
}
```

- ### usage (tsx next)
```tsx
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));

  const hexabase = await createClient({ url: baseUrl, token: user.token})
  const [workspace, setWorkspace] = useState({} as Workspace);
  const createWsInput = {
    name: "new workspace";
  }
  useEffect(() =>
  {
    hexabase.workspaces.create(createWsInput).then(resp => setWorkspace(resp.w_id));

    return;
  }, []);    
```

### - update()

```ts
  /**
   * function update: update workspace setting
   * @param: {WorkspaceSettingReq}: payload
   * @returns WorkspaceIDRes
   */
  async update(payload: WorkspaceSettingReq): Promise<ResponseErrorNull>
```

> Successful response Schema

```json
    {
      "error": "any"
    }
```

- ### usage (tsx next)
```tsx
  import {createClient} from '@hexabase/hexabase-js';
  const baseUrl = process.env.BASE_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const hexabase = await createClient({ url: baseUrl, token: user.token});
  const [workspaceDetail, setWorkspaceDetail] = useState({} as WorkspacesRes);
  const [workspaceUpdate, setWorkspaceUpdate] = useState({} as WorkspaceUpdate);
  useEffect(() =>
  {
    hexabase.workspaces.getDetail().then(resp => setWorkspaceDetail(resp.workspace));
    return;
  }, []);

  useEffect(() =>
  {
    hexabase.workspaces.update(createWsInput).then(resp => setWorkspaceUpdate(workspaceDetail));
    return;
  }, [workspaceDetail]);    
```

### - setCurrent()

```ts
  /**
   * set the current workspace by workspace_id
   * @param  {SetWsInput} SetWsInput: include workspace_id
   * @returns ModelRes
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

    const [workspaceCurrent, setWorkspaceCurrent] = useState({} as WorkspacesRes{});

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
   * get the current workspace by workspace_id
   * @param  {getWsInput} getWsInput: include workspace_id
   * @returns WorkspaceCurrentRes
   */
  public async getCurrent(): Promise<WorkspaceCurrentRes>
```

> Successful response schema

```json
  {
    "wsCurrent": {
      "workspace_id": "string"
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
    const [workspaceCurrent, setWorkspaceCurrent] = useState({} as WorkspacesCurrentRes{});

    useEffect(() =>
    {
      hexabase.workspaces.getCurrent().then(resp => { setWorkspaceCurrent(resp.wsCurrent) });
      return;
    }, []);    
```

### - getDetail()

```ts
  /**
   * get workspaces id current
   * @returns WorkspaceCurrentRes
   */
  public async getDetail(): Promise<WorkspaceCurrentRes>
```

> Successful response schema

```json
  {
    "workspace": { 
        "workspace": {
        "id": "string",
        "w_id": "string",
        "plan_id": "string",
        "plan_name": "string",
        "ws_admin": [
          "string"
        ],
        "ws_admin_users": [
          {
            "user_id": "string",
            "email": "string",
            "user_name": "string",
            "access_key": "string"
          }
        ],
        "user_id": "string",
        "name": "string",
        "ws_usage": {
          "users": "number",
          "users_limit": "number",
          "storage": "number",
          "storage_limit": "number",
          "datastores": "number",
          "datastores_limit": "number",
          "items": "number",
          "items_limit": "number"
        },
        "languages": [
          {
            "lang_cd": "string",
            "use": "boolean",
            "default": "boolean"
          },
          {
            "lang_cd": "string",
            "use": "boolean",
            "default": "boolean"
          }
        ],
        "pwd_policy": {
          "expired_day": "number",
          "lockout_count": "number",
          "lockout_time": "number",
          "min_length": "number",
          "pattern_check_type": "number",
          "same_limit": "number",
          "use_expired_day": "boolean",
          "use_lockout_count": "boolean",
          "use_lockout_time": "boolean",
          "use_min_length": "boolean",
          "use_pattern_check": "boolean",
          "use_same_limit": "boolean",
          "use_language_en": "boolean",
          "use_language_ja": "boolean"
        },
        "user_sessions": {
          "session_timeout_sec": "number",
          "use": "boolean",
          "default": "boolean"
        },
        "ws_functions": {
          "ws_settings": {
            "disable_change_name": "boolean",
            "disable_change_logo": "boolean",
            "disable_manage_admins": "boolean",
            "disable_archive": "boolean",
            "disable_password_policy": "boolean",
            "disable_global_search": "boolean"
          },
          "group_settings": {
            "disable_new_group": "boolean",
            "disable_group_import": "boolean",
            "disable_user_import": "boolean",
            "disable_group_roles": "boolean"
          },
          "developer_functions": {
            "disable_developer_mode": "boolean",
            "disable_beta": "boolean",
            "disable_generate_token": "boolean",
            "show_access_keys": "number"
          },
          "task_queue": {
            "show_task_list": "number"
          },
          "new_workspaces": {
            "new_workspace": "number"
          }
        },
        "app_functions": {
          "app_settings": {
            "disable_change_name": "boolean",
            "disable_role_settings": "boolean",
            "disable_left_menu_extension": "boolean",
            "disable_program_extension": "boolean",
            "disable_delete_application": "boolean",
            "enable_action_validation": "boolean",
            "enable_field_values_validation": "boolean"
          },
          "app_templates": {
            "disable_new_application": "boolean",
            "disable_save_templates": "boolean"
          },
          "dashboards": {
            "disable_edit_dashboards": "boolean",
            "disable_edit_dash_items": "boolean"
          },
          "data_reports": {
            "disable_edit_reports": "boolean",
            "disable_save_reports": "boolean",
            "disable_csv_downloads": "boolean"
          },
          "datastores": {
            "disable_db_settings": "boolean",
            "disable_grid_view": "boolean",
            "disable_borad_view": "boolean",
            "disable_status_update": "boolean",
            "disable_query": "boolean"
          },
          "csv_import": {
            "disable_csv_update": "boolean",
            "disable_replace_import": "boolean",
            "use_qr_download": "boolean"
          },
          "item_view": {
            "disable_pagination": "boolean",
            "disable_change_layouts": "boolean",
            "disable_edit_statuses": "boolean",
            "disable_edit_fields": "boolean",
            "disable_edit_actions": "boolean",
            "hide_link_items": "boolean",
            "disable_pin_items": "boolean"
          }
        },
        "redirect": {
          "is_apply_redirect_url_for_disabled_users": "boolean",
          "redirect_url": ""
        },
        "created_at": "2022-10-05T04:29:52.835Z",
        "updated_at": "2022-10-05T04:29:52.835Z"
      }
    },
    "error": undefined,
  }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token});
    const [workspaceDetail, setWorkspaceDetail] = useState({} as WorkspacesRes);

    useEffect(() =>
    {
      hexabase.workspaces.getDetail().then(resp => setWorkspaceDetail(resp.workspace));
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
        "expired_day": "number",
        "lockout_count": "number",
        "lockout_time": "number",
        "min_length": "number",
        "pattern_check_type": "number",
        "same_limit": "number",
        "use_expired_day": "boolean",
        "use_lockout_count": "boolean",
        "use_lockout_time": "boolean",
        "use_min_length": "boolean",
        "use_pattern_check": "boolean",
        "use_same_limit": "boolean"
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
    const [workspaceCurrent, setWorkspaceCurrent] = useState({} as WorkspacesRes);

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
        "w_id": "string",
        "ws_functions": {
          "use_global_search": "boolean",
          "use_beta": "boolean",
          "use_password_policy": "boolean",
          "use_create_workspace": "number"
        },
        "app_functions": {
          "use_dashboards": "boolean",
          "use_queries": "boolean",
          "use_create_application": "boolean",
          "use_reports": "boolean"
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
    const [workspaceCurrent, setWorkspaceCurrent] = useState({} as WorkspacesRes);

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
        "w_id": "string",
        "usage": {
          "users": "number",
          "users_limit": "number",
          "storage": "number",
          "storage_limit": "number",
          "items": "number",
          "items_limit": "number",
          "datastores_limit": "number",
          "datastores": "number"
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
    const [wsUsage, setWsUsage] = useState({} as WsUsage);

    useEffect(() =>
    {
      hexabase.workspaces.getPasswordPolicy(workspaceId).then(resp => setWsUsage(resp.wsUsage));
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
        "error": "string",
        "group": {
          "index": "number",
          "name": "string",
          "group_id": "string",
          "g_id": "string"
        },
        "children": [
          {
            "g_id": "string",
            "group_id": "string",
            "name": "string",
            "index": "number",
          }
          ...
        ],
        "count": "number"
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
    const [wsGroupChildren, setWsGroupChildren] = useState({} as WsWsGroupChildren{});

    useEffect(() =>
    {
      hexabase.workspaces.getGroupChildren(workspaceId).then(resp => setWsGroupChildren(resp.wsGroupChildren));
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
      "taskQueueList": "any", 
      "error": undefined 
    }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [wsTaskQueueList, setTaskQueueList] = useState({} as WsTaskQueueList);

    useEffect(() =>
    {
      hexabase.workspaces.getTaskQueueList().then(resp => setTaskQueueList(resp.taskQueueList));
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
    const [wsTaskQueueStatus, setTaskQueueStatus] = useState({} as WsTaskQueueStatus{});

    useEffect(() =>
    {
      hexabase.workspaces.getTaskQueueStatus(taskId, workspaceId).then(resp => setTaskQueueStatus(resp.taskQueueStatus));
      return;
    }, []);
```

### - archive()

```ts
  /**
   * function archive: archive workspace
   * @param  {ArchiveWorkspace} payload is required
   * @returns ResponseErrorNull
   */
  public async archive(payload: ArchiveWorkspace): Promise<ResponseErrorNull>
```

> Successful response schema

```json
    { 
      "error": "any" 
    }
```

- ### usage (tsx next)
```tsx
    import {createClient} from '@hexabase/hexabase-js';

    const baseUrl = process.env.BASE_URL;
    const user = JSON.parse(localStorage.getItem('user'));
    const hexabase = await createClient({ url: baseUrl, token: user.token})
    const [error, setError] = useState([] as WsError[]);
    const archiveWorkspaceInput: ArchiveWorkspace = {
      payload: {
        w_id: "w_id_001",
        archived: true,
      }
    };

    useEffect(() =>
    {
      hexabase.workspaces.archive(payload).then(resp => setError(payload.w_id));
      return;
    }, []);
```