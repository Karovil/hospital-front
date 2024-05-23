import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'doctor-home', component: DoctorHomeComponent },
  { path: 'patient-home', component: PatientHomeComponent },
  { path: 'admin-home', component: AdminHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }