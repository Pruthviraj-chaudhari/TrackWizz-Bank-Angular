import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaginatedCustomers, IUser } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCustomers(
    pageNumber: number,
    pageSize: number
  ): Observable<any> {
    return this.http.get<any>(
      `http://localhost:5210/api/customer/getall?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }

  addCustomer(data: IUser): Observable<{ message: string; user: IUser }> {
    return this.http.post<{ message: string; user: IUser }>(`${this.apiUrl}/auth/register`, data);
  }

  // getCompanyById(id: string): Observable<ICompany> {
  //   return this.http.get<ICompany>(`http://localhost:5180/Company/${id}`);
  // }

  // updateCompany(id: number, updatedData: ICompany): Observable<any> {
  //   return this.http.put(`http://localhost:5180/Company/${id}`, updatedData);
  // }
}
