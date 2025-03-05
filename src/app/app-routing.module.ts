import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingModule } from './features/landing/landing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthRedirectGuard } from './core/auth/authRedirect.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthRedirectGuard] },

  { path: '', loadChildren: () => import('./features/landing/landing.module').then((m) => m.LandingModule) },

  {
    path: 'admin', 
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule), 
    canActivate: [AuthGuard], 
    data: { role: 'Admin' }
  },

  {
    path: 'customer', 
    loadChildren: () => import('./features/customer/customer.module').then((m) => m.CustomerModule),
    canActivate: [AuthGuard], 
    data: { role: 'Customer' }
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LandingModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
