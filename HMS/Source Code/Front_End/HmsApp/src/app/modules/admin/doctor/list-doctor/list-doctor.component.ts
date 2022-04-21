import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LookupService } from 'src/app/core/services/lookups/lookups.service';
import { ToastMessageService } from 'src/app/core/services/utils/toast-message.service';
import { Doctor } from 'src/app/shared/models/doctor/doctor-resp-data';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit {
  appointmentColumns: string[] = ['name', 'designation', 'mobileno', 'gender', 'email','action'];
  isDataLoading = false; // flag to hide/show loader
  dataSource: any = []; 
  private onDestroy$: Subject<void> = new Subject<void>();
  constructor(private router: Router, private lookupService: LookupService, private toastService: ToastMessageService) { }

  ngOnInit(): void {
    this.getDoctorsList();
  }
  
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  /**
   * Method to navigate to edit appointment page
   * @param event 
   */
   editAppointment(event: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentData: JSON.stringify(event)
      },
      skipLocationChange:true
    };
    this.router.navigate(['admin/dashboard/editAppointment'], navigationExtras);
  }

  /**
   * Method to delete existing appointment
   * @param event 
   */
  deleteAppointment(event: any) {
    //this.showDeleteAppointmentDialog(event);
  }

  navigateToAppointment() {
    this.router.navigate(["admin/dashboard/addDoctor"]);
  }

  
  /**
   * Method to get appointment list
   */
   getDoctorsList() {
    this.isDataLoading = true;
    this.dataSource = [];
    this.lookupService.getDoctorsList()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (retData: any) => {
          if (retData.status) {
            if (retData.data.Table != null && retData.data.Table.length > 0) {
              this.parseListResponse(retData);
            }
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
          this.isDataLoading = false;
        }
      });
  }

  /**
   * Method to parse appointment list response
   * @param retData 
   */
  parseListResponse(retData: any) {
    const respObjLst = [];
    for (const row of retData.data.Table) {
      const respObj = new Doctor();
      respObj.doctorId = row.DoctorId;
      respObj.gender = row.Gender;
      respObj.name = row.Name;
      respObj.address1 = row.Address1;
      respObj.address2 = row.Address2;
      respObj.city = row.City;
      respObj.phone = row.Phone;
      respObj.mobile = row.Mobile;
      respObj.salary = row.Salary;
      respObj.email = row.Email;
      respObj.designation = row.Designation;
      respObjLst.push(respObj);
    }
    this.dataSource = respObjLst;
  }

}