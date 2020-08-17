import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IVendor } from '../models/vendors';

@Injectable({
  providedIn: 'root',
})
export class VendorsService {
  constructor(private http: HttpClient) {}

  getAllVendors(): Observable<IVendor[]> {
    return this.http.get<IVendor[]>(`http://localhost:3000/vendors`);
  }
  filterVendors(filter): Observable<IVendor[]> {
    return this.http.get<IVendor[]>(
      `http://localhost:3000/vendors?supplies=${filter}`
    );
  }
}
