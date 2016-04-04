# Node JS : Load node module in RequireJS
This is plugin for RequireJS working on Node JS, NWJS/Node Webkit and Atom Electron

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
    'node!path', // native nodejs
    'node!fs-extra', // nodejs library
    'node!nw.gui', // native nwjs
    'node!electron', // native electron
    'jquery' // jquery
], function(path, fs, nwjs, electron, $) {

    // your code
    
});

```