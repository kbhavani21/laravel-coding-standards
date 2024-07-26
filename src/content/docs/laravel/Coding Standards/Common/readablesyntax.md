---
title: Use shorter and more readable syntax in your Laravel code
---

Using shorter syntax makes your Laravel code readable and consistent and reduces cognitive load. For instance, if you want to get the particular session data from the request session, instead of using the following:
```js
$request->session()->get('order')
// or
Session::get('order')
//You can simply use this:
session('order')
```

