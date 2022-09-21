import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
