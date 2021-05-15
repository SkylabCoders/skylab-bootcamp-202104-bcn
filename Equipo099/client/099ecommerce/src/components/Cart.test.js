import React from 'react'
import {render, screen, fireEvent} from '../utils/test-utils'
import Cart from './Cart'
import actionTypes from '../redux/actions/actionTypes'
import { deleteItem } from '../redux/actions/actionCreators'

describe('When invoked a cart component', () => {
    test('should retun a text with a Cart', () => {
        render(<Cart />, {initialState: {items: []}})
        expect(screen.getByText(/Mi cesta:/i)).toBeInTheDocument()
    })
})

describe('When click a button in component Cart', () => {
    test('Should call an deleteItem func', () => {
        render(<Cart />, {initialState: {items: []}})
        const button = screen.getByText(/X/i);
        deleteItem.mockReturnValueOnce({
            type: actionTypes.DELETE_ITEM,
            itemId: { id: 1 },
          });
        fireEvent.click(button)
        expect(deleteItem).toHaveBeenCalled()
    })
})