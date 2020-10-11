import * as Counter from './Counter'

console.log(Counter.number) // 0

Counter.inc()
Counter.inc()
Counter.inc()

Counter.dec()

console.log(Counter.number)  // 2

Counter.reset()

console.log(Counter.number) // 0

window.Counter = Counter