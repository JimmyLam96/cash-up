import { Item } from "../../backend/src/items/interfaces/item.interface"

export interface Order {
  id: string;
  platform: string;
  customerId?: string;
  address: string;
  houseNumber: [number, string];
  postalCode: [number, string]
  items: [Item];
  status: "string";
}

export interface ItemType {
  [key: string]: {
    price: number;
    amount: number;
  };
}

export interface DetailsType {
  address: string,
  postalCode: [number, string],
  houseNumber: [number, string],
  phoneNumber: number,
  firstName: string,
  lastName: string,
}

export interface OrderEntry {
  _id: string;
  orders: [Order]
}
