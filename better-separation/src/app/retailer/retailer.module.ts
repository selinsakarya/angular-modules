import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerRoutingModule } from './retailer-routing.module';
import { RetailerComponent } from './retailer.component';
import { MaterialModule } from '../shared/material/material.module';
@NgModule({
  declarations: [
    RetailerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RetailerRoutingModule
  ]
})
export class RetailerModule { }
