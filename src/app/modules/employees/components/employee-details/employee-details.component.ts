import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/modules/employees/services/employees.service';
import { IEmployee } from 'src/app/models/employees';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeData: IEmployee = {} as IEmployee;
  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routes) => {
      this.employeesService
        .getEmployeeDetails(routes.empId)
        .subscribe((data) => {
          this.employeeData = data;
        });
    });
  }
}
