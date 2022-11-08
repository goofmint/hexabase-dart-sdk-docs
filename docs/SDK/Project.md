The Project manages datastore, files and more.

## Retribute all project

```dart
var projects = await workspace.projects();
print(projects[0].id);
print(projects[0].datastores[0].id);
```

## Retribute specific project

```dart
// From client
var project = client.project(id: 'PROJECT_ID');
// From workspace
var project = workspace.project(id: 'PROJECT_ID');
print(project.id);
print(project.datastores[0].id);
```

## Update project

```dart
// Call name method each line
project.name('ja', 'テストアプリ');
project.name('en', 'Test App');
// You can use chaine method
project.name('ja', 'テストアプリ').name('en', 'Test App');
await project.save();
```

## Delete project

```dart
await project.delete();
```
