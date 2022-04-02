import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdmissionComponent } from './admission/add-admission/add-admission.component';
import { ListAdmissionComponent } from './admission/list-admission/list-admission.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import { AddHospitalBranchComponent } from './hospital-branch/add-hospital-branch/add-hospital-branch-component';
import { ListHospitalBranchComponent } from './hospital-branch/list-hospital-branch/list-hospital-branch.component';
import { AddMedicineComponent } from './medicine/add-medicine/add-medicine.component';
import { ListMedicineComponent } from './medicine/list-medicine/list-medicine.component';
import { AddRoomTypeComponent } from './room-type/add-room-type/add-room-type.component';
import { ListRoomTypeComponent } from './room-type/list-room-type/list-room-type.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { ListStaffComponent } from './staff/list-staff/list-staff.component';
import { AddTreatmentComponent } from './treatment/add-treatment/add-treatment.component';
import { ListTreatmentComponent } from './treatment/list-treatment/list-treatment.component';




const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'dashboard' 
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
  },

  {
    path: 'addAdmission',
    component: AddAdmissionComponent,
  },
  {
    path: 'listAdmission',
    component: ListAdmissionComponent,
  },

  {
    path: 'addDoctor',
    component: AddDoctorComponent,
  },
  {
    path: 'listDoctor',
    component: ListDoctorComponent,
  },

  {
    path: 'addHospitalBranch',
    component: AddHospitalBranchComponent,
  },
  {
    path: 'listHospitalBranch',
    component: ListHospitalBranchComponent,
  },

  {
    path: 'addMedicine',
    component: AddMedicineComponent,
  },
  {
    path: 'listMedicine',
    component: ListMedicineComponent,
  },

  {
    path: 'addRoomType',
    component: AddRoomTypeComponent,
  },
  {
    path: 'listListRoomType',
    component: ListRoomTypeComponent,
  },

  {
    path: 'addStaff',
    component: AddStaffComponent,
  },
  {
    path: 'listStaff',
    component: ListStaffComponent,
  },

  {
    path: 'addTreatment',
    component: AddTreatmentComponent,
  },
  {
    path: 'listTreatment',
    component: ListTreatmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
