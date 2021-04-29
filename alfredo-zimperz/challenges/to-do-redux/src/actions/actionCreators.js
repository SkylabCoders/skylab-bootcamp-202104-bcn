import actionTypes from './actionTypes';
import apiServices from '../services/api';

export function loadBooks() {
  apiServices.fetchBooks().then((books) => ({
    type: actionTypes.LOAD_BOOKS,
    books,
  }));
}

export function saveBooks() {
  return 'books';
}
