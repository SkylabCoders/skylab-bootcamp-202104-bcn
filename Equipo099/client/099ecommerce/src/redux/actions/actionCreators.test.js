import axios from 'axios';
import { addItem, loadItems } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadItems', () => {
    test('should dispatch LOAD_ITEMS', async () => {
        axios.mockResolvedValue({ data: [{id: 1, name: 'crema', price: 200}] });
        const dispatch = jest.fn();
        await loadItems()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.LOAD_ITEMS,
            items: [{id: 1, name: 'crema', price: 200}],
          });
    });

    test('Should dispatch LOAD_ITEMS_ERROR', async ()=> {
        axios.post.mockRejectedValue();
        const dispatch = jest.fn();
        await loadItems()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: 'LOAD_ITEMS_ERROR',
        });
    })
});

describe('addItem', ()=> {
    test('Should dispatch ADD_ITEM', async ()=>{
        axios.post.mockResolvedValue({data: [{id: 1, name: 'crema', price: 200}]});
        const dispatch = jest.fn();
        await addItem()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(
            {
                type: actionTypes.ADD_ITEM,
                item: [{id: 1, name: 'crema', price: 200}]
            }
        );
    });
    test('Should dispatch ADD_ITEM_ERROR', async()=> {
        axios.post.mockRejectedValue();
        const dispatch = jest.fn();
        await addItem()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(
            {
                type: 'ADD_ITEM_ERROR'
            }
        );
    })
});