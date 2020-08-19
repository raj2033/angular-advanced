import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AbsentComponent } from './components/absent/absent.component';
import { PresentComponent } from './components/present/present.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      { path: ':empId/update', component: EmployeeFormComponent },
      { path: ':empId', component: EmployeeDetailsComponent },
      // https://github.com/angular/angular/issues/12842
      // issue with lazy loading named routers
      { path: 'absent', component: AbsentComponent, outlet: 'attendance' }, // named router shold have outlet keyword
      { path: 'present', component: PresentComponent, outlet: 'attendance' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
