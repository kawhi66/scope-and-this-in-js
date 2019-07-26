var library = require('../lib');

test('isFunction', () => {
    function fn() { };
    expect(library.isFunction(fn)).toBeTruthy();
    expect(library.isFunction(null)).toBeFalsy();
    expect(library.isFunction(undefined)).toBeFalsy();
    expect(library.isFunction({})).toBeFalsy();
});

test('myCall', () => {
    var obj = { a: 123 };
    function fn() {
        return this.a
    };
    expect(() => library.myCall(obj)).toThrow(new Error("myCall should only work for a function"));
    expect(library.myCall(fn, obj)).toBe(obj.a);

    var _this = this;
    var fn1 = () => { return this };
    expect(fn1()).toBe(_this);
    expect(library.myCall(fn1, obj)).toBe(_this);

    function fn2(params) {
        return this.a > params
    };
    expect(library.myCall(fn2, obj, 121)).toBeTruthy();
    expect(library.myCall(fn2, obj, 125)).toBeFalsy();
})

test('myApply', () => {
    var obj = { a: 123 };
    function fn() {
        return this.a
    };
    expect(() => library.myApply(obj)).toThrow(new Error("myCall should only work for a function"));
    expect(library.myApply(fn, obj)).toBe(obj.a);

    var _this = this;
    var fn1 = () => { return this };
    expect(fn1()).toBe(_this);
    expect(library.myApply(fn1, obj)).toBe(_this);

    function fn2(params) {
        return this.a > params[0]
    };
    expect(library.myApply(fn2, obj, 121)).toBeTruthy();
    expect(library.myApply(fn2, obj, 125)).toBeFalsy();
})

test('myBind', () => {
    var obj = { a: 123 };
    function fn() {
        return this.a
    };
    expect(library.myBind(fn, obj)()).toBe(obj.a);
});