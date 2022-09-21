import { Component, OnInit } from '@angular/core';
import { Retailer } from '../models/retailer';
import { RetailerService } from '../services/retailer.service';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.scss'],
})
export class RetailerComponent implements OnInit {

  retailer: Retailer = { };

  constructor(private retailerService: RetailerService, private productService:ProductService) { }

  ngOnInit(): void {
    this.retailer = this.retailerService.getRetailer();
    this.retailer.products = this.productService.getProductsByRetailer(this.retailer.id);
  }
}
