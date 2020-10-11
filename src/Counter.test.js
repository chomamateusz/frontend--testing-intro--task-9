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

})