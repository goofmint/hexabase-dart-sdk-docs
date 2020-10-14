---
title: Hexabase.Workspaces
---

### getWorkspacesAsync

> get all user workspaces

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

### setCurrentWorkspace

> set user current workspace

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