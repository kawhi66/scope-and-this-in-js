exports = module.exports = fn
exports.description = 'define in global, wrapped in trycatch, and called in global context'
exports.callee = `// define in global, wrapped in trycatch, and called in global context
function fn() {
    try {
        const _this = this
        return _this
    } catch (e) {
        throw e
    }
}

fn()
`

function fn() {
    try {
        const _this = this
        return _this
    } catch (e) {
        throw e
    }
}
