import itemsReducer from './itemsReducer'
import actionTypes from '../actions/actionTypes'

jest.mock('../actions/actionTypes')

describe('When invoked a itemsReducer', () => {
    test('Should return a array with items in LOAD_ITEMS', () => {
        let item = [];
        const action = {
            type: actionTypes.LOAD_ITEMS,
            items: {}
        }
        const result = itemsReducer(item, action)
        const resultExpected = {}
        expect(result).toEqual(resultExpected)
    })
    test('Should return a new item in Update_ITEM', () => {
        let item = [];
        const action = {
            type: actionTypes.UPDATE_ITEM,
            items: {}
        }
        const result = itemsReducer(item, action)
        const resultExpected = {}
        expect(result).toEqual(resultExpected)
    })
    test('Should return de default array with no coincidence', () => {
        let item = [];
        const action = {
            type: actionTypes.DELETE_ITEM,
            items: {}
        }
        const result = itemsReducer(item, action)
        const resultExpected = []
        expect(result).toEqual(resultExpected)
    })
})