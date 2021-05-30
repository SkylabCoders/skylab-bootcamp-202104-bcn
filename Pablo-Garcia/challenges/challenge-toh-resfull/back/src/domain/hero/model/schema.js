import { db, Schema } from '../../../common/adapter/database/index.js';

const HeroSchema = new Schema({
  name: String,
});

export default db.model('Hero', HeroSchema);
