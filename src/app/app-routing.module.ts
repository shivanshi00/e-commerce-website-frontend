import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OptionsComponent } from './options/options.component';
import { FiltersComponent } from './filters/filters.component';
import { DisplayComponent } from './display/display.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
{
 path: '',
 component: LoginPageComponent,
},
  {
    path: 'home',
    component: HomePageComponent,
  },
{
path:'cart',
component: UserCartComponent,
},
{
 path: 'login',
 component: LoginPageComponent,
},
{
 path: 'register',
 component: SignUpComponent,
},
{
 path: 'display',
 component: DisplayComponent,
},
{
 path: 'options',
 component: OptionsComponent,
},
{
 path: 'proddet',
 component: ProductDetailsComponent,
},
  {
    path: 'profile',
    component:ProfilePageComponent,
  },
  {
    path: 'history',
    component:OrderHistoryComponent,
  },
  {
    path: 'addProduct',
    component: AddproductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


