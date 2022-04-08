import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AddAdmissionComponent } from "./admission/add-admission/add-admission.component";
import { ListAdmissionComponent } from "./admission/list-admission/list-admission.component";
import { AdminDashboardComponent } from "./dashboard/admin-dashboard.component";
import { AddDoctorComponent } from "./doctor/add-doctor/add-doctor.component";
import { ListDoctorComponent } from "./doctor/list-doctor/list-doctor.component";
import { AddHospitalBranchComponent } from "./hospital-branch/add-hospital-branch/add-hospital-branch-component";
import { ListHospitalBranchComponent } from "./hospital-branch/list-hospital-branch/list-hospital-branch.component";
import { AddMedicineComponent } from "./medicine/add-medicine/add-medicine.component";
import { ListMedicineComponent } from "./medicine/list-medicine/list-medicine.component";
import { AddRoomTypeComponent } from "./room-type/add-room-type/add-room-type.component";
import { ListRoomTypeComponent } from "./room-type/list-room-type/list-room-type.component";
import { AddStaffComponent } from "./staff/add-staff/add-staff.component";
import { ListStaffComponent } from "./staff/list-staff/list-staff.component";
import { AddTreatmentComponent } from "./treatment/add-treatment/add-treatment.component";
import { ListTreatmentComponent } from "./treatment/list-treatment/list-treatment.component";
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [

    AdminDashboardComponent,
    AddHospitalBranchComponent,
    ListHospitalBranchComponent,
    AddAdmissionComponent,
    ListAdmissionComponent,
    AddDoctorComponent,
    ListDoctorComponent,
    AddMedicineComponent,
    ListMedicineComponent,
    AddRoomTypeComponent,
    ListRoomTypeComponent,
    AddStaffComponent,
    ListStaffComponent,
    AddTreatmentComponent,
    ListTreatmentComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
