import * as mongoose from 'mongoose';
import { OrderStatus } from '../../../../shared/interfaces/order.status.enum';

export const OrderSchema = new mongoose.Schema({
  platform: String,
  status: String,
  address: String,
  items: Array,
  postalCode: Array,
  customerId: String,
  houseNumber: Array
});