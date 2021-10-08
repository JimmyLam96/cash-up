import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: Number,
  address: String,
  postalCode: Array,
  //array of id's of each order
  orders: [String],
});
