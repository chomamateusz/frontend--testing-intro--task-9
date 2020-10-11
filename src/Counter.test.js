import Counter from './Counter'

describe('Counter class tests', () => {

    it('1. should be a ES6 class', () => {

        expect(() => Counter()).toThrow('Cannot call a class as a function')

    })

})