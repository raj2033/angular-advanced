import { Component, OnInit, Input } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEmployee } from 'src/app/models/employees';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss'],
})
export class PresentComponent implements OnInit {
  employees: IEmployee[] = [];
  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeesService
      .getEmployeeAttendance('present')
      .subscribe((data) => (this.employees = data));
  }

  // router is navigates to the employee details page, using its ID
  loadEmployee(id): void {
    this.router.navigate([`/employees/${id}`], { relativeTo: this.route });
  }
}

// this.router.events.subscribe((newRouter) => {
//   if (newRouter instanceof NavigationEnd) {
//     const attendanceOutlet = this.router.routerState.root.firstChild.children.filter(
//       (child) => child.outlet === 'attendance'
//     )[0];
//     const status = attendanceOutlet.routeConfig.path;

//     if (status !== this.employees[0].status) {
//       this.employeesService
//         .getEmployeeAttendance(status)
//         .subscribe((data) => (this.employees = data));
//     }
//   }
// });
