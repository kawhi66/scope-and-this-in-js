exports = module.exports = fn
exports.description = 'define inside a function and return it, called in global context'
exports.callee = `// define inside a function and return it, called in global context
function fn() {
    return nestedFn()

    function nestedFn() {
        const _this = this
        return _this
    }
}

fn()
`

function fn() {
    return nestedFn()

    function nestedFn() {
        const _this = this
        return _this
    }
}
