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
  emailFormatExample: string = 'e.g., example@example.com';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Validación del formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.username)) {
      this.error = 'Correo no válido';
      return;
    }

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
      this.error = 'Nombre de usuario o contraseña inválidos';
    }
  }
}
