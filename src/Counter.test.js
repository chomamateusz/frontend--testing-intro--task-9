import { Counter, DecreasingCounter } from './Counter'

Counter.prototype.render = jest.fn()

beforeEach(() => {
    Counter.prototype.render.mockReset()
})

describe('Counter render', () => {

    it('should render when being created', () => {

        const counter1 = new Counter()

        expect(counter1.render).toHaveBeenCalled()

    })

    it('should render when `.inc` is called', () => {

        const counter1 = new Counter()

        counter1.inc() // second render

        expect(counter1.render).toHaveBeenCalledTimes(2)

    })

    it('should render when `.reset` is called', () => {

        const counter1 = new Counter()

        counter1.reset() // second render

        expect(counter1.render).toHaveBeenCalledTimes(2)

    })

})

describe('DecreasingCounter render', () => {

    it('should render when `.dec` is called', () => {

        const counter1 = new DecreasingCounter()

        counter1.dec() // second render

        expect(counter1.render).toHaveBeenCalledTimes(2)

    })

})