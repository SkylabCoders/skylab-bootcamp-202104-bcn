import mongoose from 'mongoose';
import { uri } from '../../../application/config/database.js';

export const Connect = () => mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('bbdd conected'))
    .catch((e) => console.log(e));

export const db = mongoose;
export const Schema = mongoose.Schema;
