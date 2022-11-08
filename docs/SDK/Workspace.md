The workspace is basic of your Hexabase application.

## Retribute all workspaces

```dart
var workspaces = await client.workspace.all();
```

### Retribute specific workspace

```dart
var workspace = client.workspace(id: 'WORKSPACE_ID');
```

### Update workspace name

```dart
workspace.name = 'Awesome workspace name';
await workspace.save();
```

