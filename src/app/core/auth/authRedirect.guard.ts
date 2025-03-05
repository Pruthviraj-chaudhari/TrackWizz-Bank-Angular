import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.loadUser().pipe(
      take(1),
      switchMap((user) => {
        if (user) {
          const redirectUrl = user.role === 'Admin' ? '/admin' : '/customer';
          this.router.navigate([redirectUrl]);
          return of(false); 
        }
        return of(true); 
      })
    );
  }
}
