import { Item } from "src/items/interfaces/item.interface";

export interface Order {
    id: string;
    platform: string;
    customerId?: string;
    address: string;
    houseNumber: [number, string];
    postalCode: [number, string]
    items: [Item];
}