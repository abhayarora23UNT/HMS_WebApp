export class DoctorAppointment {
    appointmentId: number;
    appointmentCode: string;
    doctorId: string;
    patientId: string;
    hospitalId: string;
    appt_Date: string;
    next_Appt_Date: string;
    diseaseNotes: string;
    fee: number;
 

    constructor() {
        this.appointmentId=0;
        this.appointmentCode = '';
        this.doctorId = '';
        this.patientId = '';
        this.hospitalId = '';
        this.appt_Date = '';
        this.next_Appt_Date = '';
        this.diseaseNotes = '';
        this.fee = 0.0;
    }
}

