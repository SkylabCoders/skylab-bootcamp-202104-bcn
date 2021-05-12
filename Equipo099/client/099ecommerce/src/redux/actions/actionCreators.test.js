import axios from 'axios';
import { loadItems } from './actionCreators';
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
});


