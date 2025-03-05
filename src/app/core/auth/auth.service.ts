import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable(); 

  constructor(private http: HttpClient, private router: Router) {
    this.loadUser(); 
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials, { withCredentials: true }).pipe(
      tap(user => {
        this.userSubject.next(user);
        localStorage.setItem('isAuthenticated', 'true'); 
      })
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/auth/logout`, {}, { withCredentials: true }).pipe(
      tap(() => {
        this.userSubject.next(null);
        localStorage.removeItem('isAuthenticated');
        this.router.navigate(['/login']);
      })
    );
  }  

  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/me`, { withCredentials: true }).pipe(
      tap(user => {
        console.log("user:", user)
        this.userSubject.next(user)
      }),
      catchError(() => {
        this.userSubject.next(null);
        return of(null);
      })
    );
  }
  
  loadUser(): Observable<any> {
    return this.getUser().pipe(
      take(1),  
      tap(user => {
        if (user) {
          this.userSubject.next(user); 
        }
      })
    );
  }
  
}
