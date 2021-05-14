import axios from axios;
import {loadTasks} from './actionCreators'
import actionTypes from './actionTypes'

jest.mock('axios');

describe('when invoked a loadTasks func', () => {
    test('should return and async func', async () => {
        axios.mockResolvedValue();
        const dispatch = jest.fn();
        await loadTasks()(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
})