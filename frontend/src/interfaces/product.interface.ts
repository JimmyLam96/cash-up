import { Timestamp } from "firebase/firestore";

export interface Product {
  id: string;
  category: string;
  created_date: Timestamp;
  display_name: string;
  name: string;
  price: number;
}
