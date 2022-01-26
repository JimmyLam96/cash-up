import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/order.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Order') private readonly orderModel: Model<Order>) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find();
  }

  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findOne({ _id: id });
  }

  async create(order: Order): Promise<Order> {
    return await this.orderModel(order).save();
  }

  async delete(id: string): Promise<Order> {
    return await this.orderModel.findByIdAndRemove(id);
  }

  async update(id: string, order: Order): Promise<Order> {
    return await this.orderModel.findByIdAndUpdate(id, order, { new: true });
  }
}
