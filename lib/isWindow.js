"use strict";
module.exports = isWindow

function isWindow(obj) {
    return obj != null && obj === obj.window
}
