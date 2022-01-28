import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from 'src/orders/orders.controller';
import { OrdersService } from 'src/orders/orders.service';
import { OrderSchema } from 'src/orders/schemas/order.schema';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomerSchema } from './schemas/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Customer', schema: CustomerSchema },
      { name: 'Order', schema: OrderSchema },
    ]),
  ],
  controllers: [CustomersController, OrdersController],
  providers: [CustomersService, OrdersService],
})
export class CustomersModule {}
