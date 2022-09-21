import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './services/product.service';
import { RetailerService } from './services/retailer.service';
import { ShoppingCartService } from './services/shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService, RetailerService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
