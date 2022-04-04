import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { StorageProvider } from 'src/app/core/http/storage-service';
import { Messages } from 'src/app/core/messages/messages';
import { DoctorAppointmentService } from 'src/app/core/services/doctor/doctor-apppointment.service';
import { ToastMessageService } from 'src/app/core/services/utils/toast-message.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { DoctorAppointment } from 'src/app/shared/models/doctor/doctor-appointment-resp-data';

@Component({
  selector: 'app-doc-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss']
})
export class ListAppointmentComponent implements OnInit, OnDestroy {


  appointmentColumns: string[] = ['doctorId', 'patientId', 'appt_Date', 'fee', 'action'];
  isDataLoading = false;
  private onDestroy$: Subject<void> = new Subject<void>();
  dataSource: any = [];
  constructor(private doctorService: DoctorAppointmentService, private toastService: ToastMessageService, private router: Router, private storageService: StorageProvider, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDocAppointmentList();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  getDocAppointmentList() {
    this.isDataLoading = true;
    this.dataSource = [];
    this.doctorService.getDocAppointmentList('')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (retData: any) => {
          if (retData.status) {
            if (retData.data.Table != null && retData.data.Table.length > 0) {
              this.parseListResponse(retData);
            }
            // else {
            //   this.toastService.infoMessage(Messages.No_Records_Message);
            // }
          } else {
            this.toastService.errorMessage(retData.message);
          }
          this.isDataLoading = false;
        },
        error: (err: any) => {
          console.log(err);
          this.isDataLoading = false;
        },
        complete: () => {
          console.log('complete');
          this.isDataLoading = false;
        }
      });
  }

  parseListResponse(retData: any) {
    const respObjLst = [];
    for (const row of retData.data.Table) {
      const respObj = new DoctorAppointment();
      respObj.appointmentCode = row.AppointmentCode;
      respObj.appointmentId = row.AppointmentId;
      respObj.appt_Date = row.Appt_Date;
      respObj.doctorId = row.DoctorId;
      respObj.fee = row.Fee;
      respObj.diseaseNotes = row.DiseaseNotes;
      respObj.hospitalId = row.HospitalId;
      respObj.next_Appt_Date = row.Next_Appt_Date;
      respObj.patientId = row.PatientId;
      respObjLst.push(respObj);
    }
    this.dataSource = respObjLst;
    console.log(this.dataSource);
  }

  editAppointment(event: any) {
    console.log('+++ edit ' + event);
  }

  deleteAppointment(event: any) {
    console.log('+++ delete ' + event);
    this.showDeleteAppointmentDialog(event);
  }

  showDeleteAppointmentDialog(data: any) {
    const message = Messages.Dialog_Confirmation_Delete_Message;

    const dialogData = {
      title: "Delete Appointment",
      message: message
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.callDeleteAppointmentApi(data);
      }
    });

  }

  /**
    * Method to called delete appointment api
    * @param respData 
    */
  callDeleteAppointmentApi(respData: any) {
    this.isDataLoading = true;
    this.doctorService.deleteDocAppointment(respData.appointmentId)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (retData: any) => {
          this.isDataLoading = false;
          if (retData.status) {
            this.toastService.successMessage(Messages.DeleteDocAppointmentSuccess);
            this.getDocAppointmentList();
          } else {
            this.toastService.errorMessage(retData.message);
          }
        },
        error: (err: any) => {
          console.log(err);
          this.isDataLoading = false;
        },
        complete: () => {
          console.log('complete');
          this.isDataLoading = false;
        }
      });
  }


  navigateToAppointment() {
    this.router.navigate(["doctor/dashboard/addAppointment"]);
  }
}
