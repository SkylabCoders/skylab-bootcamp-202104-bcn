import axios from 'axios';
import { addItem, loadItems, deleteItem, updateItem, loadItemById } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadItems', () => {
    test('should dispatch LOAD_ITEMS', async () => {
        axios.mockResolvedValue(
            { data: [{id: 1, name: 'crema', price: 200}] });
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

describe('deleteItem', ()=> {
    test('Should dispatch DELETE_ITEM', async ()=>{
        axios.delete.mockResolvedValue({data: {id: 10}});
        const dispatch = jest.fn();
        await deleteItem()(dispatch);

        expect(dispatch).toHaveBeenCalled();
    });
    test('Should dispatch DELETE_ITEM_ERROR', async()=> {
        axios.delete.mockRejectedValue();
        const dispatch = jest.fn();
        await deleteItem()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(
            {
                type: 'DELETE_ITEM_ERROR'
            }
        );
    })
});

describe('updateItem', ()=> {
    test('Should dispatch UPDATE_ITEM', async ()=>{
        axios.put.mockResolvedValue(
            {data: [{id: 1, name: 'crema', price: 200}]});
        const dispatch = jest.fn();
        await updateItem()(dispatch);

        expect(dispatch).toHaveBeenCalled()
    });
    test('Should dispatch UPDATE_ITEM_ERROR', async()=> {
        axios.put.mockRejectedValue();
        const dispatch = jest.fn();
        await updateItem()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(
            {
                type: 'UPDATE_ITEM_ERROR'
            }
        );
    })
});

describe('loadItemById', ()=> {
    test('Should return and object', async ()=>{
        const result = loadItemById({})
        const objectR = {
            type: actionTypes.ADD_ITEM,
            item: {}
          }
        expect(result).toEqual(objectR);
    });
});
