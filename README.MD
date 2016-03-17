# NWJS : Load node module in RequireJS
This is plugin for RequireJS working on NWJS/Node Webkit

## Install

Bower

```
bower install nw-requirejs --save
```

NPM

```
npm install nw-requirejs --save
```
or download [here](https://github.com/didanurwanda/nw-requirejs/archive/master.zip)

please do the following configuration

```JavaScript
{
    "map": {
        "*": {
            "node": "bower_components/nw-requirejs/nw-require"
        }
    }
}
```

## Example

```JavaSciprt
define([
    'node:fs',
    'node:path'
], function(fs, path) {

    // your code

});

```