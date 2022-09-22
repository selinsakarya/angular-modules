import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { ShoppingCart } from "../models/shopping-cart";

@Injectable()
export class ShoppingCartService {
  constructor() {
    console.log('ShoppingCartService is initialized at ' + Date())
  }

  getShoppingCart(): ShoppingCart {
    let shoppingCart: ShoppingCart = {};
    let dummyProducts: Product[] = [];
    for (let index = 1; index < 10; index++) {
      if (index % 2 === 0) continue;
      let product: Product = {
        id: Math.random().toString(),
        name: `Product ${index}`,
        price: index * 10
      }
      dummyProducts.push(product);
    }
    shoppingCart.products = dummyProducts;
    shoppingCart.discount = 10;
    shoppingCart.subTotal = dummyProducts.reduce((partialSum, p) => partialSum + p.price, 0);
    shoppingCart.total = shoppingCart.subTotal - (shoppingCart.subTotal * shoppingCart.discount / 100);
    return shoppingCart;
  }
}
