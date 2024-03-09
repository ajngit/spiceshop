import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  //login
//   {
//     path:'',component:LoginComponent
//   },
//   //dashboard
//   {
//     path:'dashboard',component:DashboardComponent
//   },
//   //register
//   {
//      path:'register',component:RegisterComponent
//   },
//   //transaction
//   {
//     path:'transaction',component:TransactionComponent
//  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }