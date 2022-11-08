## Hexabase Configuration

Starting with Hexabase SDK, you have to import the library.

```dart
import 'package:hexabase/hexabase.dart';
```

And you can initialize Hexabase client anytime.

```dart
Hexabase();
```

If you will use Hexabase client in any file, please call `instance` method. It returns Hexabase client.

```dart
var client = Hexabase.instance;
```

### Login

You have to log in to Hexabase, before use any methods.

```dart
await client.auth.login('you@example.com', 'your_secure_password');
```

After logged in, you can use Hexabase.
