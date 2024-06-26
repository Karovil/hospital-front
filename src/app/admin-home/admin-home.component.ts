import { Component } from '@angular/core';

// Define las interfaces para las citas y los usuarios
interface Appointment {
  doctorId: number;
  patientId: string;
  doctor: string;
  patient: string;
  date: string;
  consultationRoom?: string;
  diagnosis?: string;
}

interface User {
  role: 'doctor' | 'patient';
  name: string;
  age?: number;
  rh?: string;
  specialization?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  assignedAppointments: Appointment[] = [];
  users: User[] = [];

  newUser: User = {
    role: 'patient',
    name: '',
    age: undefined,
    rh: '',
    specialization: '',
    email: '',
    password: ''
  };

  newAppointment: Appointment = {
    doctorId: 0,
    patientId: '',
    doctor: '',
    patient: '',
    date: '',
    consultationRoom: '',
    diagnosis: ''
  };

  editingAppointment: Appointment | null = null;

  onRoleChange(event: any) {
    const selectedRole = event.target.value;
    this.newUser = { role: selectedRole, name: '', age: undefined, rh: '', specialization: '', email: '', password: '' };
  }

  createUser() {
    // Verificar si todos los campos obligatorios están llenos
    const requiredFieldsFilled = (
      this.newUser.name &&
      this.newUser.email &&
      this.newUser.password &&
      ((this.newUser.role === 'patient' && this.newUser.age && this.newUser.rh) ||
      (this.newUser.role === 'doctor' && this.newUser.specialization))
    );

    // Verificar si el formato del correo electrónico es correcto
    const emailFormatValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.newUser.email);

    // Verificar si el formato del RH es correcto (dos letras seguidas de un símbolo + o -)
    const rhFormatValid = this.newUser.rh ? /^[A-Za-z]+[+-]$/.test(this.newUser.rh) : false;

    // Si todos los campos obligatorios están llenos y los formatos son correctos, se crea el usuario
    if (requiredFieldsFilled && emailFormatValid && rhFormatValid) {
      const newUser = { ...this.newUser };
      this.users.push(newUser);
      this.newUser = {
        role: 'patient',
        name: '',
        age: undefined,
        rh: '',
        specialization: '',
        email: '',
        password: ''
      };
    } else {
      // Si algún campo obligatorio está vacío o algún formato no es correcto, se muestra una alerta
      alert('Please fill in all required fields with valid formats (email and RH).');
    }
  }

  assignAppointment() {
    const newAppointment = { ...this.newAppointment };
    this.assignedAppointments.push(newAppointment);
    this.newAppointment = { doctorId: 0, patientId: '', doctor: '', patient: '', date: '', consultationRoom: '', diagnosis: '' };
  }

  editAppointment(appointment: Appointment) {
    this.editingAppointment = { ...appointment };
  }

  updateAppointment() {
    if (this.editingAppointment) {
      const index = this.assignedAppointments.findIndex(a => a === this.editingAppointment);
      if (index > -1) {
        this.assignedAppointments[index] = { ...this.editingAppointment };
      }
      this.editingAppointment = null;
    }
  }

  cancelEdit() {
    this.editingAppointment = null;
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  deleteAppointment(appointment: Appointment) {
    const index = this.assignedAppointments.indexOf(appointment);
    if (index > -1) {
      this.assignedAppointments.splice(index, 1);
    }
  }
}
