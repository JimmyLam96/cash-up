import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
import { Order } from './interfaces/order.interface';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createOrderDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Order> {
    return this.ordersService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateOrderDto: CreateOrderDto,
    @Param('id') id: string,
  ): Promise<Order> {
    return this.ordersService.update(id, updateOrderDto);
  }
}
