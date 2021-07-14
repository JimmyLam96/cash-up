import { Item } from "src/items/interfaces/item.interface";

export class CreateOrderDto {
    readonly id: string;
    readonly platform: string;
    readonly customerId: string;
    readonly address: string;
    readonly houseNumber: [number, string];
    readonly items: [Item];
    readonly status: string;
    readonly postalCode: [number, string]
  }
  