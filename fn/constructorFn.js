function Foo() {
    this.user = 'kawhi'
}
Foo.prototype.getUser = function() {
    return this.user
}
Foo.prototype.fn = function() {
    const _this = this
    return _this
}

const instance = new Foo()
exports = module.exports = instance.fn
exports.wrapper = Foo
exports.description = 'define in prototype of an ES5 class, and called as an instance method'
exports.callee = `// define in prototype of an ES5 class, and called as an instance method
function Foo() {
    this.user = 'kawhi'
}
Foo.prototype.getUser = function() {
    return this.user
}
Foo.prototype.fn = function() {
    const _this = this
    return _this
}

const instance = new Foo()
instance.fn()
`

exports.description1 = 'define in prototype of an ES5 class, assign to a variable, and called in global context'
exports.callee1 = `// define in prototype of an ES5 class, assign to a variable, and called in global context
function Foo() {
    this.user = 'kawhi'
}
Foo.prototype.getUser = function() {
    return this.user
}
Foo.prototype.fn = function() {
    const _this = this
    return _this
}

const instance = new Foo()
const fn = instance.fn
fn()
`
