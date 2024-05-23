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
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent {
  // Lista de citas disponibles
  availableAppointments: Appointment[] = [
    { doctorId: '1', doctor: 'Doctor 1', patientId: '', patient: '', date: '2024-05-20T10:00', consultationRoom: 'Room 1' },
    { doctorId: '2', doctor: 'Doctor 2', patientId: '', patient: '', date: '2024-05-21T11:00', consultationRoom: 'Room 2' },
    // Agrega más citas disponibles aquí según sea necesario
  ];

  // Lista de citas pendientes del paciente
  pendingAppointments: Appointment[] = [
    // Aquí puedes cargar las citas pendientes del paciente desde una fuente de datos
  ];

  // ID del paciente actual (ejemplo)
  currentPatientId: string = 'patient123';

  // Método para solicitar una nueva cita
  requestAppointment(appointment: Appointment) {
    const appointmentIndex = this.availableAppointments.findIndex(a => a === appointment);
    if (appointmentIndex !== -1) {
      appointment.patientId = this.currentPatientId;
      appointment.patient = 'Patient Name'; // Reemplazar con el nombre real del paciente
      this.pendingAppointments.push(appointment);

      // Eliminar la cita de la lista de citas disponibles
      this.availableAppointments.splice(appointmentIndex, 1);

      console.log(`Solicitud de cita con ${appointment.doctor} para el ${appointment.date} enviada.`);
    }
  }

  // Método para cancelar una cita pendiente
  cancelAppointment(appointment: Appointment) {
    const index = this.pendingAppointments.findIndex(a => a === appointment);
    if (index !== -1) {
      this.pendingAppointments.splice(index, 1);

      // Añadir la cita de nuevo a la lista de citas disponibles
      this.availableAppointments.push({
        doctorId: appointment.doctorId,
        patientId: '',
        doctor: appointment.doctor,
        patient: '',
        date: appointment.date,
        consultationRoom: appointment.consultationRoom,
        diagnosis: appointment.diagnosis
      });

      console.log(`Cita con ${appointment.doctor} para el ${appointment.date} cancelada.`);
    }
  }
}
