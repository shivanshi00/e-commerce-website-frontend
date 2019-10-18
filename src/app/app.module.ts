import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OptionsComponent } from './options/options.component';
import { FiltersComponent } from './filters/filters.component';
import { DisplayComponent } from './display/display.component';
import {HttpClientModule} from '@angular/common/http';
import {ServicesService} from './services.service';
import {FormsModule} from "@angular/forms";
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddproductComponent } from './addproduct/addproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ProductDetailsComponent,
    UserCartComponent,
    SignUpComponent,
    LoginPageComponent,
    OptionsComponent,
    FiltersComponent,
    DisplayComponent,
    ProfilePageComponent,
    OrderHistoryComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
