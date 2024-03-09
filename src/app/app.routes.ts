import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  //home
  {
    path:'',component:HomeComponent
  }
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