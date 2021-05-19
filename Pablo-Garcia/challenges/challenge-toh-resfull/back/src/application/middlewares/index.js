import cors from 'cors';
import express from 'express';

const middlewares = (app) => {
  app.use(cors());
  app.use(express.json());
};

export default middlewares;
