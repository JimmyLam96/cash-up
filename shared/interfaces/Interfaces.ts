export interface Order {
  platform: string;
  customerId?: string;
  address: string;
  houseNumber: [number, string];
  postalCode: [number, string]
  items: {item: ItemDetails, amount: number}[];
  status: string;
  phoneNumber: number;
}

export interface ItemType {
  [key: string]: {
    title: string
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

//type when we fetch all the itemcard for the cashier page (http://localhost:4000/items)
export interface ItemFetch {
  dishes: ItemDetails[]
  _id: string,
  category: string,
  __v: 0
}

//type for each individual item when we fetch from the backend
export interface ItemDetails  {
  name: string,
  category: string,
  price: number,
  description: string
  _id: string
}

export interface OrderEntry {
  _id: string;
  orders: [Order]
}
