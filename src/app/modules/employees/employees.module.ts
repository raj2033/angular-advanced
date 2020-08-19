import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentComponent } from './components/present/present.component';
import { AbsentComponent } from './components/absent/absent.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
    PresentComponent,
    AbsentComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class EmployeesModule {}
