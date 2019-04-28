class Foo {
    constructor() {
        this.user = 'kawhi'
    }

    getUser() {
        return this.user
    }

    fn() {
        const _this = this
        return _this
    }
}

const instance = new Foo()
exports = module.exports = instance.fn
exports.wrapper = Foo
exports.description = 'define in prototype of an ES6 class, and called as an instance method'
exports.callee = `// define in prototype of an ES6 class, and called as an instance method
class Foo {
    constructor() {}

    user = 'kawhi'

    getUser() {
        return this.user
    }

    fn() {
        const _this = this
        return _this
    }
}

const instance = new Foo()
instance.fn()
`

exports.description1 = 'define in prototype of an ES6 class, assign to variable, and called in global context'
exports.callee1 = `// define in prototype of an ES6 class, assign to variable, and called in global context
class Foo {
    constructor() {
        this.user = 'kawhi'
    }

    getUser() {
        return this.user
    }

    fn() {
        const _this = this
        return _this
    }
}

const instance = new Foo()
const fn = instance.fn
fn()
`
