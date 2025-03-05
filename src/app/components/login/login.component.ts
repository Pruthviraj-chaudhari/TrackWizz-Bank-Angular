import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { __classPrivateFieldGet } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  user$ = this.authService.user$;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log(response)
        const role = response?.role || response?.user?.role; 

        console.log("ROLE:", role)
        if (role === 'Admin') {
          this.router.navigate(['/admin/dashboard']);
        } else if (role === "Customer") {
          this.router.navigate(['/customer/dashboard']);
        } else {
          this.router.navigate(['/customer/dashboard']);
        }
      },
      error: (err) => {
        this.errorMessage =
          err.error?.message || 'Invalid credentials. Please try again.';
      },
    });
  }

  ngOnInit(): void {}
}
