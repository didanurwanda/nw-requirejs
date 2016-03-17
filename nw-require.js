define({
    load: function (name, require, load, config) {
        load(window.require(name));
    }
});
