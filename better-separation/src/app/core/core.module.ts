import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
