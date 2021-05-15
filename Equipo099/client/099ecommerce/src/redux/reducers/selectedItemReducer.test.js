import selectedItemReducer from './selectedItemReducer'
import actionTypes from '../actions/actionTypes'

jest.mock('../actions/actionTypes')

describe('When invoked a selectedItem reducer', () => {
    test('Should return and array with new item', () => {
        const action = {
            type: actionTypes.ADD_ITEM,
            item: {name: 'josep'}
        }
        let item = []
        const resultEx = [{name: 'josep'}]
        const result = selectedItemReducer(item,action)
        expect(result).toEqual(resultEx)
    })
    test('Should return a new array of items with deleted item id', () => {
        const action = {
            type: actionTypes.DELETE_ITEM,
            itemId: 1
        }
        let item = [{id:1, name:'josep'}]
        const resultEx = []
        const result = selectedItemReducer(item,action)
        expect(result).toEqual(resultEx)
    })
    test('Should return the same array with no actionType', () => {
        const action = {
            type: actionTypes.LOAD_ITEMS,
            item: {}
        }
        let item = []
        const resultEx = []
        const result = selectedItemReducer(item,action)
        expect(result).toEqual(resultEx)
    })
})