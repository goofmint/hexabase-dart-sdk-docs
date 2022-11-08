The Datastore is cloud database. It supports file attachments.

## Retribute datastore

```dart
var datastore = project.datastore(id: 'DATASTORE_ID');
```

## Search datastore

You can search datastore with some operands. You will get HexabaseItem that matched your search conditions.

```dart
var query = datastore.query();
```

### Execute search

After set conditions to the query, you can retribute items with query. The query is optional.

```dart
// Default condition is all items and first page.
var items = await datastore.items();
// Filtering with search condition
var items = await datastore.items(query: query);
```

### Search operands

#### Page and limit

`page` method specifies which page data is to be retrieved. You can develop pagination using the `page` and `per` methods.

```dart
query.page(1).per(10);
```

### Equal

`equalTo` method can be used to search for matching data in a given field.

```dart
// fieldName == "Test"
query.equalTo('fieldName', 'Test');
```

You can use regexp for search.

```dart
// fieldName ~ /^[a-z0-9]*$/
query.equalTo('fieldName', '^[a-z0-9]*$');
```

### Not equal

`notEqualTo` method can be used to search for NOT matching data in a given field.

```dart
// fieldName != "Test"
query.notEqualTo('fieldName', 'Test');
```

### In Array

`inArray` method provides to search the data that maching all of givin data.

```dart
// name == "Apple" or name == "Orange"
query.inArray("name", ["Apple", "Orange"]);
```

#### Not in

`notInArray` method provides to search the data that unmaching all of givin data.

```dart
// name != "Apple" && name != "Orange"
query.notInArray("name", ["Apple", "Orange"]);
```

#### Greater than ">"

You can use greaterThan method to int and DateTime.

```dart
// price > 100
query.greaterThan("price", 100);
```

#### Greater than or equal

Only support int and DateTime.

```dart
// price >= 100
query.greaterThanOrEqualTo("price", 100);
```

#### Less than

Only support int and DateTime.

```dart
// price < 100
query.lessThan("price", 100);
```

#### Less than or equal

Only support int and DateTime.

```dart
// price <= 100
query.lessThanOrEqualTo("price", 100);
```

