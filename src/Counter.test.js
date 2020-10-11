import { Counter, DecreasingCounter } from './Counter'

describe('Counter render', () => {

    it('should render when being created', () => {

        Counter.prototype.render = jest.fn()

        const counter1 = new Counter()

        expect(counter1.render).toHaveBeenCalled()

    })

    it('should render when `.inc` is called', () => {

        Counter.prototype.render = jest.fn()

        const counter1 = new Counter()

        counter1.inc() // second render

        expect(counter1.render).toHaveBeenCalledTimes(2)

    })

})

describe('DecreasingCounter render', () => {})