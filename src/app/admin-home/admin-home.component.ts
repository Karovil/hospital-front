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
    const newUser = { ...this.newUser };
    this.users.push(newUser);
    this.newUser = { role: 'patient', name: '', age: undefined, rh: '', specialization: '', email: '', password: '' };
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
