import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { Order } from 'src/orders/interfaces/order.interface';

@Injectable()
export class CustomersService {
  logger: Logger;

  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {
    this.logger = new Logger(CustomersService.name);
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find();
  }

  async findOrders(id: string): Promise<Order[]> {
    //find the corrosponding customer
    const customer: Customer = await this.findOne(id);
    let orders;
    //try fetch the orders from the order module
    try {
      orders = await this.orderModel
        .find()
        .where('_id')
        .in(customer.orders)
        .exec();
    } catch (error) {
      throw new NotFoundException(
        'Customer could not be found, either id is incorrect or no such id',
      );
    }
    return orders;
  }

  async findOne(id: string): Promise<Customer> {
    let customer;
    try {
      customer = await this.customerModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find customer with id: ' + id);
    }
    if (!customer)
      throw new NotFoundException('Could not find customer with id: ' + id);

    return customer;
  }

  async create(customer: Customer): Promise<Customer> {
    return await this.customerModel(customer).save();
  }

  async delete(id: string): Promise<Customer> {
    return await this.customerModel.findByIdAndRemove(id);
  }

  async update(id: string, customer: Customer): Promise<Customer> {
    return await this.customerModel.findByIdAndUpdate(id, customer, {
      new: true,
    });
  }
}
