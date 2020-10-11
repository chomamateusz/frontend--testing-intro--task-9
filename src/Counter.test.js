import { Counter, DecreasingCounter } from './Counter'

Counter.prototype.render = jest.fn(Counter.prototype.render)

beforeEach(() => {
    Counter.prototype.render.mockClear()
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

})

describe('DecreasingCounter render', () => {})