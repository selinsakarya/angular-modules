import { Product } from "./product";

export interface Retailer {
  id?: string;
  name?: string;
  products?: Product[];
  address?: string;
}
