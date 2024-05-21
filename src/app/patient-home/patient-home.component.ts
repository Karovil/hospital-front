// src/app/patient-home/patient-home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent {
  // Lista de citas disponibles
  availableAppointments: { doctor: string, date: string }[] = [
    { doctor: 'Doctor 1', date: '20/05/2024' },
    { doctor: 'Doctor 2', date: '21/05/2024' },
    // Agrega más citas disponibles aquí según sea necesario
  ];

  // Lista de citas pendientes
  pendingAppointments: { doctor: string, date: string }[] = [
    // Aquí puedes cargar las citas pendientes del paciente desde una fuente de datos
  ];

  // Método para solicitar una nueva cita
  requestAppointment(doctor: string, date: string) {
    // Aquí puedes implementar la lógica para enviar la solicitud de cita
    console.log(`Solicitud de cita con ${doctor} para el ${date} enviada.`);
  }
}
