# JavaScript *scope* and *this* in different scenarios

我尽可能地列举了不同的 JavaScript 环境（浏览器环境和 Node 环境）和不同的应用场景下，‘this’ 这个特殊的引用的指向。很难用一句话准确的概括所有的场景，但最接近的可以是：在全局环境中，this 总是指向顶层对象；而函数中的 this 往往指向的是该函数的调用对象。

有一种场景下的 this 在我的测试过程中表现很特殊：

```JavaScript
// define in prototype of an ES6 class, assign to variable, and called in global context
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
fn() // guess what does this refer to in this scenario?
```

## How to use this repository

**clone this repository**
```
git clone git@github.com:kawhi66/scope-and-this-in-js.git
```

**install all dependencies**
```
npm install
```

**start the server in browser environment**
```
yarn start
```

**run jest test in node environment**
```
yarn test
```
