import * as Counter from './Counter'

describe('Counter class tests', () => {

    beforeAll(() => {})
    beforeEach(() => {
        Counter.reset()
    })
    afterAll(() => {})
    afterEach(() => {})

    it('2. should store current number in `number` variable', () => {
        
        expect(Counter.number).toBeDefined()
        expect(typeof Counter.number).toBe('number')

    })

    it('3. should start from `0`', () => {
        
        expect(Counter.number).toBe(0)

    })

    it('4. should have `.inc` method that bumps the stored number by `1`', () => {

        expect(Counter.inc).toBeDefined()
        expect(Counter.inc).toBeInstanceOf(Function)
        expect(() => Counter.inc()).not.toThrow()
        expect(Counter.number).toBe(1)

    })


    it('5. should have `.dec` method that decreases the stored number by `1`', () => {

        expect(Counter.dec).toBeDefined()
        expect(Counter.dec).toBeInstanceOf(Function)
        expect(() => Counter.dec()).not.toThrow()
        expect(Counter.number).toBe(-1)

    })

    it('6. should have `.reset` method overwrite that number to `0`', () => {

        Counter.inc()
        Counter.inc()
        Counter.dec() 

        expect(Counter.reset).toBeDefined()
        expect(Counter.reset).toBeInstanceOf(Function)
        expect(() => Counter.reset()).not.toThrow()

        expect(Counter.number).toBe(0)

    })

})