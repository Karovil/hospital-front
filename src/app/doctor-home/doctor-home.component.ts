import { Component } from '@angular/core';

interface Appointment {
  doctorId: string;
  patientId: string;
  doctor: string;
  patient: string;
  date: string;
  consultationRoom?: string;
  diagnosis?: string;
}

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent {
  assignedAppointments: Appointment[] = [];

  newAppointment: Appointment = {
    doctorId: 'doctor123', // Example doctor ID
    patientId: '',
    doctor: 'Dr. Example', // Example doctor name
    patient: '',
    date: '',
    consultationRoom: '',
    diagnosis: ''
  };

  editingAppointment: Appointment | null = null;

  assignAppointment() {
    const newAppointment = { ...this.newAppointment };
    this.assignedAppointments.push(newAppointment);
    this.newAppointment = { doctorId: 'doctor123', patientId: '', doctor: 'Dr. Example', patient: '', date: '', consultationRoom: '', diagnosis: '' };
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

  deleteAppointment(appointment: Appointment) {
    const index = this.assignedAppointments.indexOf(appointment);
    if (index > -1) {
      this.assignedAppointments.splice(index, 1);
    }
  }
}
