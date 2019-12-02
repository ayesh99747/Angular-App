import { LoginAdminService } from './services/login-admin.service';
import { GetCarsService } from './services/get-cars.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import {MatCardModule, MatDialogModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MatListModule} from '@angular/material';
import { CarTableComponent } from './car-table/car-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { VanTableComponent } from './van-table/van-table.component';
import { MotorbikeTableComponent } from './motorbike-table/motorbike-table.component';
import { GetMotorbikesService } from './services/get-motorbikes.service';
import { GetVansService } from './services/get-vans.service';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ViewAllVehiclesAdminComponent } from './view-all-vehicles-admin/view-all-vehicles-admin.component';
import { ViewAllBookedVehiclesAdminComponent } from './view-all-booked-vehicles-admin/view-all-booked-vehicles-admin.component';
import { ViewAllFreeVehiclesAdminComponent } from './view-all-free-vehicles-admin/view-all-free-vehicles-admin.component';
import { ViewAllCustomersAdminComponent } from './view-all-customers-admin/view-all-customers-admin.component';
import { AddManagerAdminComponent } from './add-manager-admin/add-manager-admin.component';
import { LaunchConsoleAdminComponent } from './launch-console-admin/launch-console-admin.component';
import { BookVehicleFormComponent } from './book-vehicle-form/book-vehicle-form.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PreviouslyBookedVehiclesComponent } from './previously-booked-vehicles/previously-booked-vehicles.component';
import { AllCarsTableComponent } from './all-cars-table/all-cars-table.component';
import { AllVansTableComponent } from './all-vans-table/all-vans-table.component';
import { AllMotorbikesTableComponent } from './all-motorbikes-table/all-motorbikes-table.component';
import { AllBookedCarsTableComponent } from './all-booked-cars-table/all-booked-cars-table.component';
import { AllBookedVansTableComponent } from './all-booked-vans-table/all-booked-vans-table.component';
import { AllBookedMotorbikesTableComponent } from './all-booked-motorbikes-table/all-booked-motorbikes-table.component';
import { AllFreeCarsTableComponent } from './all-free-cars-table/all-free-cars-table.component';
import { AllFreeMotorbikesTableComponent } from './all-free-motorbikes-table/all-free-motorbikes-table.component';
import { AllFreeVansTableComponent } from './all-free-vans-table/all-free-vans-table.component';
import { AllCustomersTableComponent } from './all-customers-table/all-customers-table.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { VehiclesToBeReturnedComponent } from './vehicles-to-be-returned/vehicles-to-be-returned.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginCustomerComponent,
    LoginAdminComponent,
    MainPageComponent,
    CarTableComponent,
    VanTableComponent,
    MotorbikeTableComponent,
    CustomerPageComponent,
    AdminPageComponent,
    ViewAllVehiclesAdminComponent,
    ViewAllBookedVehiclesAdminComponent,
    ViewAllFreeVehiclesAdminComponent,
    ViewAllCustomersAdminComponent,
    AddManagerAdminComponent,
    LaunchConsoleAdminComponent,
    BookVehicleFormComponent,
    PreviouslyBookedVehiclesComponent,
    AllCarsTableComponent,
    AllVansTableComponent,
    AllMotorbikesTableComponent,
    AllBookedCarsTableComponent,
    AllBookedVansTableComponent,
    AllBookedMotorbikesTableComponent,
    AllFreeCarsTableComponent,
    AllFreeMotorbikesTableComponent,
    AllFreeVansTableComponent,
    AllCustomersTableComponent,
    RegisterCustomerComponent,
    VehiclesToBeReturnedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [
    GetCarsService,
    GetMotorbikesService,
    GetVansService,
    LoginAdminService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
