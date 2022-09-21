import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RetailerComponent } from './retailer/retailer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'shopping-card',
        component: ShoppingCartComponent
      },
      {
        path: 'retailer',
        component: RetailerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
