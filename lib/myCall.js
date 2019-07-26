"use strict";
var isFunction = require("./isFunction");
module.exports = myCall;

function myCall(fn, ctx) {
    if (!isFunction(fn)) throw new Error("myCall should only work for a function");
    ctx = ctx || window;
    ctx.fn = fn; // this 总是指向它的调用者
    var args = [...arguments].slice(2);
    var result = ctx.fn(...args);
    delete ctx.fn;
    return result;
}
