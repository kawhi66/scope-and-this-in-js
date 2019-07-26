"use strict";
var isFunction = require('./isFunction');
module.exports = myBind;

function myBind(fn, ctx) {
    if (!isFunction(fn)) throw new Error("myCall should only work for a function");
    ctx = ctx || window;
    var args = [...arguments].slice(2);
    return function () {
        return fn.apply(ctx, args.concat(...arguments));
    }
}