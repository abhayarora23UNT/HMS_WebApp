import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LookupService } from 'src/app/core/services/lookups/lookups.service';
import { ToastMessageService } from 'src/app/core/services/utils/toast-message.service';
import { DoctorAppointment } from 'src/app/shared/models/doctor/doctor-appointment-resp-data';
import { HospitalBranch } from 'src/app/shared/models/hospital/hospital-branch-resp-data';

@Component({
  selector: 'app-list-hospital-branch',
  templateUrl: './list-hospital-branch.component.html',
  styleUrls: ['./list-hospital-branch.component.scss']
})
export class ListHospitalBranchComponent implements OnInit,OnDestroy {
  isDataLoading = false; // flag to hide/show loader
  dataSource: any = [];
  appointmentColumns: string[] = ['name', 'address1', 'mobileno', 'email', 'city', 'action'];  // table columns
  private onDestroy$: Subject<void> = new Subject<void>();
  constructor(private router: Router, private lookupService: LookupService, private toastService: ToastMessageService) { }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  ngOnInit(): void {
    this.getHospitalList();
  }

  /**
   * Method to navigate to add appointment screen.
   */
  navigateToAppointment() {
    this.router.navigate(["admin/dashboard/addHospitalBranch"]);
  }

  editAppointment(data: any) {

  }
  deleteAppointment(data: any) {

  }


  /**
   * Method to get appointment list
   */
  getHospitalList() {
    this.isDataLoading = true;
    this.dataSource = [];
    this.lookupService.getHospitalBranchList()
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
      const respObj = new HospitalBranch();
      respObj.hospitalId = row.HospitalId;
      respObj.hospitalCode = row.HospitalCode;
      respObj.name = row.Name;
      respObj.address1 = row.Address1;
      respObj.address2 = row.Address2;
      respObj.city = row.City;
      respObj.phone1 = row.Phone1;
      respObj.phone2 = row.Phone2;
      respObj.description = row.Description;
      respObj.email = row.Email;
      respObjLst.push(respObj);
    }
    this.dataSource = respObjLst;
  }

}