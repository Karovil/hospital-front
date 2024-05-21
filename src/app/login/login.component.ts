// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      const role = this.authService.getRole();
      if (role === 'doctor') {
        this.router.navigate(['/doctor-home']);
      } else if (role === 'patient') {
        this.router.navigate(['/patient-home']);
      } else if (role === 'admin') {
        this.router.navigate(['/admin-home']);
      }
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
