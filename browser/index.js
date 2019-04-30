const arrayFn = require('@/fn/arrayFn')
const constructorFn = require('@/fn/constructorFn')
const globalFn = require('@/fn/globalFn')
const instanceFn = require('@/fn/instanceFn')
const nestedGlobalFn = require('@/fn/nestedGlobalFn')
const objectFn = require('@/fn/objectFn')
const strictGlobalFn = require('@/fn/strictGlobalFn')
const trycatchFn = require('@/fn/trycatchFn')
const _ = require('_')

document.write('<h1>Does "this" refer to "window" in below scenarios, and if not, what does it refer to ?</h1>')
document.write(`<pre><code>${globalFn.callee}</code></pre>`)
postAction(globalFn())

document.write(`<pre><code>${trycatchFn.callee}</code></pre>`)
postAction(trycatchFn())

document.write(`<pre><code>${strictGlobalFn.callee}</code></pre>`)
postAction(strictGlobalFn())

document.write(`<pre><code>${nestedGlobalFn.callee}</code></pre>`)
postAction(nestedGlobalFn())

document.write(`<pre><code>${objectFn.callee}</code></pre>`)
postAction(objectFn.wrapper.action(false))

document.write(`<pre><code>${objectFn.callee1}</code></pre>`)
postAction(objectFn(false))

document.write(`<pre><code>${objectFn.callee2}</code></pre>`)
postAction(objectFn(true)())

document.write(`<pre><code>${arrayFn.callee}</code></pre>`)
postAction(arrayFn.wrapper[1]())

document.write(`<pre><code>${constructorFn.callee}</code></pre>`)
postAction(new constructorFn.wrapper().fn())

document.write(`<pre><code>${constructorFn.callee1}</code></pre>`)
postAction(constructorFn())

document.write(`<pre><code>${instanceFn.callee}</code></pre>`)
postAction(new instanceFn.wrapper().fn())

document.write(`<pre><code>${instanceFn.callee1}</code></pre>`)
postAction(instanceFn())


function postAction(obj) {
    if (_.isWindow(obj)) {
        document.write('true <br>')
        document.write('window <br>')
    } else {
        document.write('false <br>')
        document.write(`${JSON.stringify(obj)} <br>`)
    }

    console.log(obj)
}
