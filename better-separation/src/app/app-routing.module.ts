import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailerGuard } from './core/guards/retailer.guard';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
  {
    path: 'retailer',
    canLoad: [RetailerGuard],
    loadChildren: () => import('./retailer/retailer.module').then(m => m.RetailerModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
