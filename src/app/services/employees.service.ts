import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../models/employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`http://localhost:3000/employees`);
  }
  getEmployeeDetails(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(`http://localhost:3000/employees/${id}`);
  }
  getEmployeeAttendance(status: string): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(
      `http://localhost:3000/employees?status=${status}`
    );
  }
  updateEmployee(form, id: number): Observable<any> {
    return this.http.patch(`http://localhost:3000/employees/${id}`, form);
  }
}
