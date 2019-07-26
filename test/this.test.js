var arrayFn = require('../fn/arrayFn')
var constructorFn = require('../fn/constructorFn')
var globalFn = require('../fn/globalFn')
var instanceFn = require('../fn/instanceFn')
var nestedGlobalFn = require('../fn/nestedGlobalFn')
var objectFn = require('../fn/objectFn')
var strictGlobalFn = require('../fn/strictGlobalFn')
var trycatchFn = require('../fn/trycatchFn')

test(globalFn.description, () => {
    expect(globalFn()).toBe(global)
})

test(trycatchFn.description, () => {
    expect(trycatchFn()).toBe(global)
})

test(strictGlobalFn.description, () => {
    expect(strictGlobalFn()).toBe(undefined)
})

test(nestedGlobalFn.description, () => {
    expect(nestedGlobalFn()).toBe(global)
})

test(objectFn.description, () => {
    expect(objectFn.wrapper.action(false)).toBe(objectFn.wrapper)
})

test(objectFn.description1, () => {
    expect(objectFn(false)).toBe(global)
})

test(objectFn.description2, () => {
    expect(objectFn(true)()).toBe(global)
})

test(arrayFn.description, () => {
    expect(arrayFn.wrapper[1]()).toBe(arrayFn.wrapper)
})

test(constructorFn.description, () => {
    var instance = new constructorFn.wrapper()
    expect(instance.fn()).toBe(instance)
})

test(constructorFn.description1, () => {
    expect(constructorFn()).toBe(global)
})

test(instanceFn.description, () => {
    var instance = new instanceFn.wrapper()
    expect(instance.fn()).toBe(instance)
})

test(instanceFn.description1, () => {
    expect(instanceFn()).toBe(undefined)
})
