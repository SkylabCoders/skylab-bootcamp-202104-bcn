import React from 'react'
import {screen, render, fireEvent} from '../utils/test-utils'
import List from './List'
import {loadItemById, loadItems} from '../redux/actions/actionCreators'
import actionTypes from '../redux/actions/actionTypes'

jest.mock('../redux/actions/actionCreators')

describe('When invoked a list component', () => {
    test('Should return a list of elements', () => {
        let initialState = {
            items :[ {
            id: 1,
            name: 'testin',
            price: "9",
            stock: 5
        }]}
        loadItems.mockReturnValueOnce({
            type: actionTypes.DELETE_ITEM,
            itemId: { id: 1 },
          });
        render(<List />, {initialState})
        expect(loadItems).toHaveBeenCalled();
    })
})
describe('When invoked a list component function', () => {
    test('then click a button, call a addToCart func', () => {
        let initialState = {
            items :[ {}]}
        render(<List />, {initialState})
        const button = screen.getByTestId("add")
        loadItemById.mockReturnValueOnce({
            type: actionTypes.LOAD_ITEM,
            items: { },
          });
        fireEvent.click(button);
        expect(loadItemById).toHaveBeenCalled();
    })
})