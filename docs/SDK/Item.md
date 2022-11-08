You can manage datastore item by HexabaseItem.

## Create data

```dart
var item = datastore.item();
item.set('name', 'Apple').set('price', 100);
await item.save();
```

## Update data

```dart
item.set('name', 'Banana').set('price', 90);
await item.save();
```

## Get detail

If you retribute items from Datastore, please call `getDetail` before update the item.

```dart
var items = await datastore.items();
var item = items[0];
await item.getDetail();
item.set('name', 'Banana').set('price', 90);
await item.save();
```

## Get field value

You can get the field value with `get` method.

```dart
item.get('name'); // Apple
item.get('price'); // 90
```

`get` method returns dynamic. So you can call it by specifying the type of return value.

```dart
// String
item.getAsString('name'); // Apple
item.getAsString('no_field', defaultValue: 'Meron'); // Meron

// bool
item.getAsBool('exist_field'); // true
item.getAsBool('no_field', defaultValue: false); // false

// int
item.getAsInt('exist_field'); // 100
item.getAsInt('no_field', defaultValue: 99); // 99

// double
item.getAsDouble('exist_field'); // 100.05
item.getAsDouble('no_field', defaultValue: 99.9); // 99.9


// DateTime
item.getAsDateTime('exist_field'); // 2022-11-08 12:00:00.000Z
item.getAsDateTime('no_field', defaultValue: DateTime(2020, 10, 2, 12, 10);); // 2020-10-02 12:10:00.000Z
```

## Retribute item status

After call `getDetail` method, you can get all of status changing actions that your current item can execute.

```dart
await item.getDetail();
item.actions().map((action) => action.name);
```

### Change status

You can set action with `action` method. After save the data, the status will be changed.

```dart
item.action('startReservation').set('price', 110);
await item.save();
```

## Delete item

```dart
await item.delete();
```

## Attach file

You can upload file(s) if you prepared file field to datastore.

```dart
var filePath = './test/test.png';
var file = HexabaseFile(
		name: basename(filePath), contentType: lookupMimeType(filePath));
file.data = File(filePath).readAsBytesSync(); // Unit8List
item.set('picture', file);
await item.save();
```

### Multiple files

If you want to upload multiple files, please use `add` method.

```dart
var filePaths = ['./test/test.png', './test/test2.png'];
for (var filePath in filePaths) {
	var file = HexabaseFile(
			name: basename(filePath), contentType: lookupMimeType(filePath));
	file.data = File(filePath).readAsBytesSync();
	item.add('picture', file);
}
await item.save();
```

### Download file content

If you want to download file content, please use `get` method. It returns **multiple** HexabaseFile objects, even if you upload a file.

```dart
var pictures = item.get('picture') as List<HexabaseFile>;
// data is Unit8List
var data = await pictures[0].download();
```

### Delete file

```dart
var picture = pictures[0];
await pictures[0].delete();
```
