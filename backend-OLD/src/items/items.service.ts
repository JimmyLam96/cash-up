import { Injectable, Logger } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  logger: Logger;
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {
    this.logger = new Logger(ItemsService.name);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    return await this.itemModel
      .findOneAndUpdate(
        { category: item.category },
        { $push: { dishes: item } },
        { upsert: true },
      )
      .catch((err: string) => new Error(err));
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
