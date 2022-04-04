import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AddAppointmentMedicineComponent } from "./appointment-medicine/add-appointment-medicine/add-appointment-medicine.component";
import { ListAppointmentMedicineComponent } from "./appointment-medicine/list-appointment-medicine/list-appointment-medicine.component";
import { AddAppointmentComponent } from "./appointment/add-appointment/add-appointment.component";
import { ListAppointmentComponent } from "./appointment/list-appointment/list-appointment.component";
import { DocDashboardComponent } from "./doc-dashboard/doc-dashboard.component";
import { DoctorRoutingModule } from "./doctor-routing.module";
import { AddTreatmentComponent } from "./treatment/add-treatment/add-treatment.component";
import { ListTreatmentComponent } from "./treatment/list-treatment/list-treatment.component";
import { DocHomeComponent } from './doc-home/doc-home.component';




@NgModule({
  declarations: [
    DocDashboardComponent,
    AddAppointmentComponent,
    ListAppointmentComponent,
    AddTreatmentComponent,
    ListTreatmentComponent,
    AddAppointmentMedicineComponent,
    ListAppointmentMedicineComponent,
    DocHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoctorRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DoctorModule { }
