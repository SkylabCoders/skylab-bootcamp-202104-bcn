import actionTypes from './actionTypes';
import apiServices from '../services/api';

// export function loadBooks() {
//   return apiServices.fetchBooks().then(({ items }) => ({
//     type: actionTypes.LOAD_BOOKS,
//     books: items,
//   }));
// }

export function loadBooksActionCreator(books) {
  return {
    type: actionTypes.LOAD_BOOKS,
    books,
  };
}

export function loadBooks() {
  return (dispatch) => {
    apiServices.fetchBooks().then((books) => {
      dispatch(loadBooksActionCreator(books.items));
    });
  };
}
export function saveBooks() {
  return 'books';
}
