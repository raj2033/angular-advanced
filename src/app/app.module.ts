import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './components/employees/employees.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { HomeComponent } from './components/home/home.component';
import { PresentComponent } from './components/present/present.component';
import { AbsentComponent } from './components/absent/absent.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    VendorsComponent,
    EmployeeDetailsComponent,
    HomeComponent,
    PresentComponent,
    AbsentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
