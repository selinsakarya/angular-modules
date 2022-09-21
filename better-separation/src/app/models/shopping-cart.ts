import { Product } from "./product";

export interface ShoppingCart {
  id?: string;
  products?: Product[];
  discount?: number;
  subTotal?: number;
  total?: number;
}
