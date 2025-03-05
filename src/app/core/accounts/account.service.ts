import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoneyTransfer, IUser } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllAccounts(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/account/getall?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      { withCredentials: true }
    );
  }

  createAccount(data: {
    userId: string;
    accountType: string;
    balance: number;
  }): Observable<any> {
    console.log(data);
    return this.http.post<any>(`${this.apiUrl}/account/create`, data);
  }

  moneyTransfer(data: IMoneyTransfer): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/money-transfer`, data, {
      withCredentials: true,
    });
  }

  getTransactions(pageNumber: number, pageSize: number) {
    console.log(`${this.apiUrl}/transactions/get-transactions?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    return this.http.get<any>(
      `${this.apiUrl}/transactions/get-transactions?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      { withCredentials: true }
    );
  }
}
