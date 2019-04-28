const obj = {
    user: 'kawhi',
    action: function(returnFunction) {
        if (returnFunction) {
            return function() {
                const _this = this
                return _this
            }
        } else {
            const _this = this
            return _this
        }
    }
}

exports = module.exports = obj.action
exports.wrapper = obj
exports.description = 'an object method, called by this object in global context'
exports.callee = `// an object method, called by this object in global context
const obj = {
    user: 'kawhi',
    action: function() {
        const _this = this
        return _this
    }
}

obj.action()
`

exports.description1 = 'an object method but assign to a variable, called in global context'
exports.callee1 = `// an object method but assign to a variable, called in global context
const obj = {
    user: 'kawhi',
    action: function() {
        const _this = this
        return _this
    }
}

const action = obj.action()
action()
`

exports.description2 = 'an object method, and it returns a function, called in global context'
exports.callee2 = `// an object method, and it returns a function, called in global context
const obj = {
    user: 'kawhi',
    action: function() {
        return function() {
            const _this = this
            return _this
        }
    }
}

obj.action()()
`
