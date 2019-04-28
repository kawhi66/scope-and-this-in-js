exports = module.exports = fn
exports.description = 'define in global but strict mode, and called in global context'
exports.callee = `// define in global but strict mode, and called in global context
function fn() {
    'use strict';
    const _this = this
    return _this
}

fn()
`

function fn() {
    'use strict';
    const _this = this
    return _this
}
