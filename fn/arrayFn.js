const arr = ['kawhi', function fn(returnFunction) {
    const _this = this
    return _this
}]

exports = module.exports = arr[1]
exports.wrapper = arr
exports.description = 'define in array as an element, and called in global context'
exports.callee = `// define in array as an element, and called in global context
const arr = ['kawhi', function fn(returnFunction) {
    const _this = this
    return _this
}]

arr[1]()
`
