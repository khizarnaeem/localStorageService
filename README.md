Local Storage Service for AngularJS
===================

localStorageService is an AngularJS based service module which can be used to store and retrieve data from local storage of browser.

<h1>Demo</h1>
<p>
<a href="http://plnkr.co/edit/WzInl1IdgJlP0psuod2V?p=preview" target="_blank">Demo</a>
</p>
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

Give prefix to keys (optional):

```javascript
storage.prefix = "Prefix";
```
this is optional but can be handy when you are using this service in multiple controllers

<b>Store Value</b>
```javascript
storage.set("Key","Value to Store");
```
<b>Get Value</b>
```javascript
storage.get("Key");
```
<b>Remove Value</b>
```javascript
storage.remove("Key");
```
<b>Clear Everything</b>
```javascript
storage.removeAll();
```
