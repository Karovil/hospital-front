// src/app/admin-home/admin-home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  // Lista de citas disponibles (similares a las citas disponibles del componente PatientHomeComponent)
  availableAppointments: { doctor: string, date: string }[] = [
    { doctor: 'Doctor 1', date: '20/05/2024' },
    { doctor: 'Doctor 2', date: '21/05/2024' },
    // Agrega más citas disponibles aquí según sea necesario
  ];

  // Lista de citas asignadas (similares a las citas asignadas del componente DoctorHomeComponent)
  assignedAppointments: { patient: string, date: string }[] = [
    { patient: 'Patient 1', date: '20/05/2024' },
    { patient: 'Patient 2', date: '21/05/2024' },
    // Agrega más citas asignadas aquí según sea necesario
  ];

  // Método para asignar una nueva cita (similares al método onAssignAppointment del componente DoctorHomeComponent)
  assignAppointment(patient: string, date: string) {
    // Lógica para asignar una nueva cita
    console.log(`New appointment assigned to ${patient} on ${date}`);
  }
}
