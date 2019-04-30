const arrayFn = require('./fn/arrayFn')
const constructorFn = require('./fn/constructorFn')
const globalFn = require('./fn/globalFn')
const instanceFn = require('./fn/instanceFn')
const nestedGlobalFn = require('./fn/nestedGlobalFn')
const objectFn = require('./fn/objectFn')
const strictGlobalFn = require('./fn/strictGlobalFn')
const trycatchFn = require('./fn/trycatchFn')

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
    const instance = new constructorFn.wrapper()
    expect(instance.fn()).toBe(instance)
})

test(constructorFn.description1, () => {
    expect(constructorFn()).toBe(global)
})

test(instanceFn.description, () => {
    const instance = new instanceFn.wrapper()
    expect(instance.fn()).toBe(instance)
})

test(instanceFn.description1, () => {
    expect(instanceFn()).toBe(undefined)
})
