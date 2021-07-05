/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom';

jest.mock('react-dom', () => ({ render: jest.fn() }));
describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('./index');
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
