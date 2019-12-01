import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { LaunchConsoleAdminComponent } from './launch-console-admin/launch-console-admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';



const routes: Routes = [
  {
    path: 'loginCustomer',
    component: LoginCustomerComponent
  },
  {
    path: 'loginAdmin',
    component: LoginAdminComponent
  },
  {
    path: 'customerPortal',
    component: CustomerPageComponent
  },
  {
    path: 'registerCustomer',
    component: RegisterCustomerComponent
  },
  {
    path: 'adminPortal',
    component: AdminPageComponent
  },
  {
    path : '',
    component : MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
