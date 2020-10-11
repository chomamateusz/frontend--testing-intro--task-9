import Counter from './Counter'

describe('Counter class tests', () => {

    it('1. should be a ES6 class', () => {

        expect(() => Counter()).toThrow('Cannot call a class as a function')
        expect(new Counter()).toBeInstanceOf(Counter)

    })

    it('2. should store current number in `number` property of the instance', () => {
        const counter1 = new Counter()

        expect(counter1.number).toBeDefined()
        expect(typeof counter1.number).toBe('number')
    })

    it('3. should start from `0` or value specified in first argument of the constructor', () => {
        const counter1 = new Counter()
        const counter2 = new Counter(14)

        expect(counter1.number).toBe(0)
        expect(counter2.number).toBe(14)
    })

    it('4.0. should have `.inc` method that bumps the stored number by `1`', () => {

        const counter1 = new Counter()

        expect(counter1.inc).toBeDefined()
        expect(counter1.inc).toBeInstanceOf(Function)
        expect(() => counter1.inc()).not.toThrow()
        expect(counter1.number).toBe(1)

    })

    it('4.1. should have `.inc` method that bumps the stored number by `1` with starting value passed to constructor', () => {

        const counter1 = new Counter(100)

        counter1.inc()

        expect(counter1.number).toBe(101)

    })

    it('5. should have `.dec` method that decreases the stored number by `1`', () => {

        const counter1 = new Counter()

        expect(counter1.dec).toBeDefined()
        expect(counter1.dec).toBeInstanceOf(Function)
        expect(() => counter1.dec()).not.toThrow()
        expect(counter1.number).toBe(-1)

    })

    it('5.1. should have `.dec` method that decreases the stored number by `1` with starting value passed to constructor', () => {

        const counter1 = new Counter(100)

        counter1.dec()

        expect(counter1.number).toBe(99)

    })

    it('6. should have `.reset` method overwrite that number to `0`', () => { 

        const counter1 = new Counter(103)
        counter1.inc() //104
        counter1.inc() //105
        counter1.dec() //104

        expect(counter1.reset).toBeDefined()
        expect(counter1.reset).toBeInstanceOf(Function)
        expect(() => counter1.reset()).not.toThrow()

        expect(counter1.number).toBe(0)

    })

})