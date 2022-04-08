import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPointService {

  // Authentication Urls //
  registerUser='api/Login/CreateLogin';
  loginUser='api/Login/GetLoginAccess';


  // Master Data //
  getDoctorsList='api/Doctors/GetDoctors';
  getHospitalBranchList='api/HospitalBranch/GetHospitalBranch';
  getPatientsList='api/Patients/GetPatients';

  getAppointmentList='api/Appointment/GetAppointment';
  getMedicinesList='api/Medicines/GetMedicines';

  // Doctors Module //

  getDocAppointmentList = 'api/Appointment/GetAppointment';
  createDocAppointment = 'api/Appointment/CreateAppointment';
  editDocAppointment = 'api/Appointment/EditAppointment';
  deleteDocAppointment = 'api/Appointment/DeleteAppointment';
  
  getAppointmentMedicineList = 'api/Appointmentmedicine/GetAppointmentmedicine';
  createAppointmentMedicine = 'api/Appointmentmedicine/CreateAppointmentmedicine';
  editAppointmentMedicine = 'api/Appointmentmedicine/EditAppointmentmedicine';
  deleteAppointmentMedicine = 'api/Appointmentmedicine/DeleteAppointmentmedicine';

  // Admin Module //
}


