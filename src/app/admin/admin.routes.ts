import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { AdminProductsComponent } from "./admin-products/admin-products.component";
import { AdminUserDetailsComponent } from "./admin-user-details/admin-user-details.component";
import { AdminOrderListComponent } from "./admin-order-list/admin-order-list.component";
import { AdminSettingsComponent } from "./admin-settings/admin-settings.component";

export const routes: Routes = [

  {
    path:'',component:AdminhomeComponent
  },
  {
    path:'adminproducts',component:AdminProductsComponent
  },
  {
    path:'adminusers',component:AdminUserDetailsComponent
  },
  {
    path:'adminorders',component:AdminOrderListComponent
  },
  {
    path:'settings',component:AdminSettingsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModule { }