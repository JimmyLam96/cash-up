import config from './config/keys';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';

@Module({
  imports: [
    ItemsModule,
    OrdersModule,
    CustomersModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [
    AppController,
    ItemsController,
    OrdersController,
    CustomersController,
  ],
  providers: [AppService, ItemsService, OrdersService, CustomersService],
})
export class AppModule {}
