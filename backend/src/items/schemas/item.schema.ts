import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  category: String,
  dishes: Array
});
