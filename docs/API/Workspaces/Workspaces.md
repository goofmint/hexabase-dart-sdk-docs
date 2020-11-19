---
title: Hexabase.Workspaces
---

### <mark>Workspace</mark>
We start by getting, and setting our App workspaces using the the below API. after getting the list of workspaces, we can choose which one to work to display our projects, datastores, and so on.

### getWorkspacesAsync()

> we could get all available user workspaces from hexabase to start working on with listing our projects, and datastores, then data items.

```ts
    /**
     * get workspaces list
     * @returns Promise
     */
    public async getWorkspacesAsync(): Promise<WorkspaceResp>
```

> Successful response Schema

```json
{
  "workspaces": [
    {
      "archived": true,
      "w_id": "string",
      "name": "string",
      "created_at": "2020-10-14T17:01:07.643Z",
      "updated_at": "2020-10-14T17:01:07.643Z"
    }
  ],
  "current_workspace_id": "string"
}
```

> Usages in TSX

```jsx
    import {Hexabase} from 'hexabase-sdk';


    const [workspaces, setWorkspaces] = useState([] as Workspaces[]);

    useEffect(() =>
    {
        Hexabase.workspaces().getWorkspacesAsync().Result().then(resp => setWorkspaces(resp.workspaces));

        return;
    }, []);    
```

### setCurrentWorkspace()

> if we want to select or switch workspaces, we set user current workspace using this API. this allows us to switch view workspaces, projects, and datastores.

```ts
    /**
     * set the current user workspace by workspace_id
     * @param  {SetWorkspaceReq} setWorkspaceReq
     * @returns Promise
     */
    public async setCurrentWorkspace(setWorkspaceReq: SetWorkspaceReq): Promise<object>
```

> Successful response schema

```json
null
```