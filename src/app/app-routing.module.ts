import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { HomeComponent } from './components/home/home.component';
import { AbsentComponent } from './components/absent/absent.component';
import { PresentComponent } from './components/present/present.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: ':empId', component: EmployeeDetailsComponent },
      { path: 'absent', component: AbsentComponent, outlet: 'attendance' }, // named router shold have outlet keyword
      { path: 'present', component: PresentComponent, outlet: 'attendance' },
    ],
  },
  { path: 'vendors', component: VendorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
