import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from '../greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';
import { CalculatorService } from './calculator/calculator.service';
import {InventaryComponent } from './inventary/inventary.component';
import { Inventarypipe } from './pipes/inventarypipe';
import { CalciComponent } from './calci/calci.component';
import {calcapp } from './calcapp';
import { CalciImplComponent } from './calci-impl/calci-impl.component';
import {SearchProduct} from './pipes/searchProduct'
@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    ProductsComponent,
    InventaryComponent,
    Inventarypipe,
    CalciImplComponent,
    SearchProduct 
  ],
  imports: [
    BrowserModule,
    calcapp
  ],
  providers: [ CalculatorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
