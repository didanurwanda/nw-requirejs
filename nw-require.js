/** `css` is a requirejs plugin
    that loads a css file and inject it into a page.
    note that this loader will return immediately,
    regardless of whether the browser had finished parsing the stylesheet.
    this css loader is implemented for file optimization and depedency managment
 */

define({
    load: function (name, require, load, config) {
        load(window.require(name));
    }
});
