import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


export const routes: Routes = [
  //home
  {
    path:'',component:HomeComponent
  },
//   //login
  {
    path:'login',component:LoginComponent
  },
  //register
  {
     path:'register',component:RegisterComponent
  },
  //categories
  {
    path:'categories',component:CategoriesComponent
 },
 //details
 {
  path:'details',component:DetailsComponent
},

{
  path:'cart',component:CartComponent
},

{
  path:'checkout', component:CheckoutComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }