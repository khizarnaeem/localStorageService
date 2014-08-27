localStorageService
===================

localStorageService is an AngularJS based service module which can be used to store and retrieve data from local storage of browser.

<h1>Requirements</h1>
<p>
AngularJS verison 1.0.5+
</p>

## How to use

Add a `<script>` to your `index.html`:

```html
<script src="/path_to_js_file/localStorageModule.js"></script>
```

Create instance of service in Controller or js file:

```javascript
var storage = localStorageService.create();
```

Give prefix to keys:

```javascript
storage.prefix = "Prefix";
```
this is optional but can be handy when you are using this service in multiple controllers
