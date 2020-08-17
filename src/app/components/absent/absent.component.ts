import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEmployee } from 'src/app/models/employees';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.scss'],
})
export class AbsentComponent implements OnInit {
  employees: IEmployee[] = [];
  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeesService
      .getEmployeeAttendance('absent')
      .subscribe((data) => (this.employees = data));
  }

  loadEmployee(id): void {
    console.log('test');
    this.router.navigate([`/employees/${id}`], { relativeTo: this.route });
  }
}
