---
title: Hexabase.Workspaces
---

### <mark>Workspace</mark>
We start by getting, and setting our App workspaces using the the below API. after getting the list of workspaces, we can choose which one to work to display our projects, datastores, and so on.

In `Workspace` will have functions:
```bash
get() // get workpsaces
create() // set current workpace by id
setCurrent() // set current workpace by id
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