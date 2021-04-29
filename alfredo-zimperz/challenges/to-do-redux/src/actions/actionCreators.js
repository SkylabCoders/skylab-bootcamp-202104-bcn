import actionTypes from './actionTypes';
import apiServices from '../services/api';

export function loadBooks() {
  return apiServices.fetchBooks().then(({ items }) => ({
    type: actionTypes.LOAD_BOOKS,
    books: items,
  }));
}

export function saveBooks() {
  return 'books';
}
