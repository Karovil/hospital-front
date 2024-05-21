import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent {
  // Métodos y lógica adicionales aquí
  onAssignAppointment() {
    // Lógica para asignar una nueva cita
    console.log('New appointment assigned');
  }
}
