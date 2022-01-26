import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  platform: String,
  status: String,
  address: String,
  items: Array,
  postalCode: Array,
  customerId: String,
  houseNumber: Array
});