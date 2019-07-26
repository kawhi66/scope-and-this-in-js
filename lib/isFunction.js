"use strict";
var toString = Object.prototype.toString;
module.exports = isFunction;

function isFunction(val) {
    return toString.call(val) === '[object Function]';
}