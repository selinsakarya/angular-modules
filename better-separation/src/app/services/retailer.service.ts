import { Injectable } from '@angular/core';
import { Retailer } from '../models/retailer';

@Injectable()
export class RetailerService {
  constructor() {
    console.log('RetailerService is initialized at ' + Date())
  }

  getRetailer(): Retailer {
    let retailer: Retailer = {
      id: Math.random().toString(),
      name: 'Qimia GmbH',
      address: 'Esentepe Mh. Büyükdere Cd. No: 102/56, Maya Akar Center Şişli/İstanbul',
    }
    return retailer;
  }
}
