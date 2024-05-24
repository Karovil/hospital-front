import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: { username: string, role: string } | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Verificar el formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(username)) {
      return false; // Si el formato de correo electrónico no es válido, retorna falso
    }

    // Implementa aquí tu lógica de autenticación
    if (username === 'doctor@example.com' && password === 'password') {
      this.currentUser = { username, role: 'doctor' };
    } else if (username === 'patient@example.com' && password === 'password') {
      this.currentUser = { username, role: 'patient' };
    } else if (username === 'admin@example.com' && password === 'password') {
      this.currentUser = { username, role: 'admin' };
    } else {
      return false;
    }

    // Redirigir a la vista correspondiente después de la autenticación
    this.router.navigate([`/${this.currentUser.role}-home`]);
    return true;
  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/']);
  }

  getUser(): { username: string, role: string } | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  hasRole(role: string): boolean {
    return this.currentUser?.role === role;
  }

  getRole(): string | null {
    return this.currentUser ? this.currentUser.role : null;
  }
}
