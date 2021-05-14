import React from 'react'
import {render, screen, fireEvent} from '../utils/test-utils'
import Cart from './Cart'
import actionTypes from '../redux/actions/actionTypes'

describe('When invoked a cart component', () => {
    test('should retun a text with a Cart', () => {

        render(<Cart />, {initialState: {items: []}})
        expect(screen.getByText(/Mi cesta:/i)).toBeInTheDocument()


    })
})