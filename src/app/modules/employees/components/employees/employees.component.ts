import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from 'src/app/models/employees';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees: IEmployee[] = [];
  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeesService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
  }

  loadAbsent(): void {
    this.router.navigate([{ outlets: { attendance: ['absent'] } }], {
      relativeTo: this.route,
    });
  }

  /**
   * - Direct [routerLink] in template not working as epected.
   * - Small workaround when named router-outlet in a child to another parent route:
   *   https://github.com/angular/angular/issues/18271#issuecomment-404661601
   *
   * - Here router-outlet named="attendance" is child to "/employee"
   *
   * - When named outlet is not inside any parent route, then
   *     [routerLink]="[{ outlets: { attendance: ['presnt'] }
   *     should be working in template itself
   */
  loadPresent(): void {
    this.router.navigate([{ outlets: { attendance: ['present'] } }], {
      relativeTo: this.route,
    });
  }
}
