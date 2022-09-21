import { Injectable, OnDestroy } from "@angular/core";
import { interval } from "rxjs";
import { Product } from "../models/product"

@Injectable()
export class ProductService implements OnDestroy {

  constructor() {
    console.log('ProductService is initialized at ' + Date());
  }

  ngOnDestroy(): void {
    console.log('ProductService is destroyed');
  }

  getProducts(): Product[] {
    let dummyProducts: Product[] = [];
    for (let index = 1; index < 10; index++) {
      let product: Product = {
        id: Math.random().toString(),
        name: `Product ${index}`,
        price: index * 10
      }
      dummyProducts.push(product);
    }

    return dummyProducts;
  }

  getProductsByRetailer(id: any): Product[] {
    let products: Product[] = [];
    for (let index = 1; index < 10; index++) {
      let product: Product = {
        id: Math.random().toString(),
        name: `Product ${index}`,
        price: index * 10,
        stock: (Math.random() * 1000).toFixed(),
      }
      products.push(product);
    }
    return products;
  }
}
