export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber: number;
  address: string;
  houseNumber: [number, string];
  postal: [number, string];
  orders: string[];
}
