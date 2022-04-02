import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAppointmentMedicineComponent } from './appointment-medicine/add-appointment-medicine/add-appointment-medicine.component';
import { ListAppointmentMedicineComponent } from './appointment-medicine/list-appointment-medicine/list-appointment-medicine.component';
import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';
import { ListAppointmentComponent } from './appointment/list-appointment/list-appointment.component';
import { DocDashboardComponent } from './doc-dashboard/doc-dashboard.component';




const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'dashboard' 
  },
  {
    path: 'dashboard',
    component: DocDashboardComponent,
  },

  {
    path: 'addAppointment',
    component: AddAppointmentComponent,
  },
  {
    path: 'listAppointment',
    component: ListAppointmentComponent,
  },

  {
    path: 'addTreatment',
    component: AddAppointmentComponent,
  },
  {
    path: 'listTreatment',
    component: ListAppointmentComponent,
  },

  {
    path: 'addAppointmentMedicine',
    component: AddAppointmentMedicineComponent,
  },
  {
    path: 'listAppointmentMedicine',
    component: ListAppointmentMedicineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
