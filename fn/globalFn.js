exports = module.exports = fn
exports.description = 'define in global, and called in global context'
exports.callee = `// define in global, and called in global context
function fn() {
    const _this = this
    return _this
}

fn()
`

function fn() {
    const _this = this
    return _this
}
