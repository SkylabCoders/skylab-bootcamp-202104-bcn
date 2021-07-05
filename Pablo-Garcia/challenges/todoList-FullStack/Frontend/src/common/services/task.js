import http from './http';

export const getAllTasks = () => http.get('/');

export const createTask = (data) => http.post('/', data);

export const updateTaskById = (id, data) => http.put(`/${id}`, data);

export const getOneTask = (id) => http.get(`/${id}`);

export const deleteTaskById = (id) => http.delete(`/${id}`);
