import actionTypes from '../../actions/actionTypes';

function booksReducer(books = [], action) {
  let updatedBooks = [...books];

  switch (action.type) {
    case actionTypes.LOAD_BOOKS:
      updatedBooks = action.books;
      break;
    default:
      updatedBooks = books;
      break;
  }
  return updatedBooks;
}

export default booksReducer;
