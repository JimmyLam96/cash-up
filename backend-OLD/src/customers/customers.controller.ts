import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Logger,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomersService } from './customers.service';
import { Order } from 'src/orders/interfaces/order.interface';
import { Customer } from '../../../shared/interfaces/Interfaces';

@Controller('customers')
export class CustomersController {
  logger: Logger;
  constructor(private readonly customerService: CustomersService) {
    this.logger = new Logger();
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get('orders/:id')
  findOrders(@Param('id') id): Promise<Order[]> {
    return this.customerService.findOrders(id);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Customer> {
    return this.customerService.findOne(id);
  }

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customerService.create(createCustomerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Customer> {
    return this.customerService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateCustomerDto: CreateCustomerDto,
    @Param('id') id: string,
  ): Promise<Customer> {
    return this.customerService.update(id, updateCustomerDto);
  }
}
