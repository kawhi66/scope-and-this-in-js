"use strict";
var isArray = require("./isArray");
var isFunction = require("./isFunction");
module.exports = myApply;

function myApply(fn, ctx, params) {
    if (!isFunction(fn)) throw new Error("myCall should only work for a function");
    ctx = ctx || window;
    ctx.fn = fn;
    if (params) {
        params = isArray(params) ? params : [params];
    } else {
        params = []
    };
    var result = ctx.fn(params);
    delete ctx.fn;
    return result;
}