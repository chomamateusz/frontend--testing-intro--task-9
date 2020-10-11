import { number, inc, dec, reset } from './Counter'

console.log(number) // 0

inc()
inc()
inc()

dec()

console.log(number)  // 2

reset()

console.log(number) // 0
