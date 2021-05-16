import axios from 'axios';
import {
  addItem, loadItems, deleteItem, updateItem, loadItemById, loadCart,
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadItems', () => {
  const dispatch = jest.fn();
  test('should dispatch LOAD_ITEMS', async () => {
    axios.mockResolvedValue({ data: [{ id: 1, name: 'crema', price: 200 }] });

    await loadItems()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_ITEMS,
      items: [{ id: 1, name: 'crema', price: 200 }],
    });
  });

  test('Should dispatch error', async () => {
    axios.mockRejectedValue();

    await loadItems()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_ITEMS_ERROR',
    });
  });
});

describe('addItem', () => {
  const dispatch = jest.fn();
  test('Should dispatch ADD_ITEM', async () => {
    axios.post.mockResolvedValue({ data: [{ id: 1, name: 'crema', price: 200 }] });
    await addItem()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      {
        type: actionTypes.ADD_ITEM,
        item: [{ id: 1, name: 'crema', price: 200 }],
      },
    );
  });
  test('Should dispatch ADD_ITEM_ERROR', async () => {
    axios.post.mockRejectedValue();
    await addItem()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      {
        type: 'ADD_ITEM_ERROR',
      },
    );
  });
});

describe('deleteItem', () => {
  const dispatch = jest.fn();
  test('Should dispatch DELETE_ITEM', async () => {
    axios.delete.mockResolvedValue();
    await deleteItem()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
  test('Should dispatch DELETE_ITEM_ERROR', async () => {
    axios.delete.mockRejectedValue();
    await deleteItem()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      {
        type: 'DELETE_ITEM_ERROR',
      },
    );
  });
});

describe('updateItem', () => {
  const dispatch = jest.fn();
  test('Should dispatch UPDATE_ITEM', async () => {
    axios.put.mockResolvedValue({ data: [{ id: 1, name: 'crema', price: 200 }] });
    await updateItem({})(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      {
        type: actionTypes.UPDATE_ITEM,
        item: [{ id: 1, name: 'crema', price: 200 }],
      },
    );
  });
  test('Should dispatch UPDATE_ITEM_ERROR', async () => {
    axios.put.mockRejectedValue();
    await updateItem()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      {
        type: 'UPDATE_ITEM_ERROR',
      },
    );
  });
});

describe('loadItemById', () => {
  test('Should dispatch ADD_ITEM', () => {
    const response = loadItemById({ id: 1, name: 'crema', price: 200 });

    expect(response).toStrictEqual({
      type: actionTypes.ADD_ITEM,
      item: { id: 1, name: 'crema', price: 200 },
    });
  });
});

describe('loadCart', () => {
  test('Should dispatch LOAD_ITEM', async () => {
    const response = loadCart();

    expect(response).toStrictEqual({
      type: actionTypes.LOAD_ITEM,
    });
  });
});
