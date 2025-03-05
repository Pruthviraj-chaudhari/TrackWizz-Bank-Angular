import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.loadUser().pipe(
      switchMap(() => this.authService.user$),
      take(1),
      map((user) => {

        if (!user) {
          this.router.navigate(['/login']);
          return false;
        }

        const requiredRole = route.data['role'];

        if (requiredRole && user.role !== requiredRole) {
          this.router.navigate(['/unauthorized']);
          return false;
        }

        return true;
      })
    );
  }
}
