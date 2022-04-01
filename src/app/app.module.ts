import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VistaProductoPizzasComponent } from './vista-producto-pizzas/vista-producto-pizzas.component';
import { VistaProductoEmpanadasComponent } from './vista-producto-empanadas/vista-producto-empanadas.component';
import { VistaProductoPostresComponent } from './vista-producto-postres/vista-producto-postres.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    CategoriesComponent,
    CheckoutComponent,
    NavbarComponent,
    FooterComponent,
    VistaProductoPizzasComponent,
    VistaProductoEmpanadasComponent,
    VistaProductoPostresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
