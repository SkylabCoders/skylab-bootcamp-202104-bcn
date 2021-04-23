const { increment } = require('./actions');
const { actionTypes } = require('./types');

test('should crate an increment action', () => {
    const action = increment();
    expect(action).toEqual({
        type: actionTypes.INCREMENT
    })
});


