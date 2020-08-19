import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsComponent } from './components/vendors/vendors.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'employees',
    loadChildren: () =>
      // notice the change in route definition here
      import('./modules/employees/employees.module').then(
        (m) => m.EmployeesModule
      ),
  },
  { path: 'vendors', component: VendorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
