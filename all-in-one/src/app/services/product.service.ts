import { Product } from "../models/product"

export class ProductService {

  constructor() {
    console.log('ProductService is initialized at ' + Date())
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

  getProductsByRetailer(id:any): Product[] {
    let products: Product[] = [];
    for (let index = 1; index < 10; index++) {
      let product: Product = {
        id: Math.random().toString(),
        name: `Product ${index}`,
        price: index * 10,
        stock: (Math.random()*1000).toFixed(),
      }
      products.push(product);
    }
    return products;
  }
}
