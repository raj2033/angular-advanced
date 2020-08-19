import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  empId: number;
  empForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required, Validators.pattern('^[2-5][0-9]')]],
    department: ['', [Validators.required]],
    experience: [''],
    mobile: ['', Validators.required],
    salary: ['', Validators.required],
    address: [''],
  });
  departments = ['cooking', 'cleaning', 'desk', 'waiter', 'finance'];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.empId = parseInt(params.get('empId'), 10);
      this.employeeService
        .getEmployeeDetails(parseInt(params.get('empId'), 10))
        .subscribe((data) => {
          this.empForm.patchValue(data);
        });
    });

    this.department.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit(): void {
    if (this.empForm.invalid) {
      // show popup to fill form properly
      // this is better experience than disabling the submit button
      return;
    } else {
      this.employeeService
        .updateEmployee(this.empForm.value, this.empId)
        .subscribe((data) => {
          this.router.navigate(['../'], { relativeTo: this.route });
        });
    }
  }

  get name(): AbstractControl {
    return this.empForm.get('name');
  }
  get age(): AbstractControl {
    return this.empForm.get('age');
  }
  get department(): AbstractControl {
    return this.empForm.get('department');
  }
  get experience(): AbstractControl {
    return this.empForm.get('experience');
  }
  get mobile(): AbstractControl {
    return this.empForm.get('mobile');
  }
  get salary(): AbstractControl {
    return this.empForm.get('salary');
  }
  get address(): AbstractControl {
    return this.empForm.get('address');
  }
}
