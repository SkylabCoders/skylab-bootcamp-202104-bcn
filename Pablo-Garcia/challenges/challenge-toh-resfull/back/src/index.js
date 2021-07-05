import express from 'express';
import Middlewares from './application/middlewares/index.js';
import Server from './application/server/index.js';
import { Connect } from './common/adapter/database/index.js';
import Controllers from './domain/index.js';

const app = express();

Connect().then(() => {
  Middlewares(app);
  Controllers(app);
  Server(app);
});
