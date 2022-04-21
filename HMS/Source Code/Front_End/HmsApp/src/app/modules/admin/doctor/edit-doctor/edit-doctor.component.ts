import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Constants, ModuleConstants } from 'src/app/core/constants/constants';
import { Messages } from 'src/app/core/messages/messages';
import { DoctorAppointmentService } from 'src/app/core/services/doctor/doctor-apppointment.service';
import { LookupService } from 'src/app/core/services/lookups/lookups.service';
import { CommonUtilsService } from 'src/app/core/services/utils/common-utils.service';
import { ToastMessageService } from 'src/app/core/services/utils/toast-message.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit , OnDestroy{

  fgEditDoctor!: FormGroup;
  isDataLoading = false;
  private onDestroy$: Subject<void> = new Subject<void>();
  genderList: any =[];

  editDoctorData: any;
  constructor(private formBuilder: FormBuilder, private appointmentService: DoctorAppointmentService, private toastService: ToastMessageService,
    private router: Router, private lookupService: LookupService, private commonUtilsService: CommonUtilsService, private route: ActivatedRoute) {
    this.createFormGroup();

    // get existing appointment data from routing params //
    this.route.queryParams.subscribe(params => {
      if (params && params['editDoctorData']) {
        this.editDoctorData = JSON.parse(params['editDoctorData']);
      }
    });

  }

  ngOnInit(): void {
    this.bindFormData(this.editDoctorData);
  }
   /**
   * Method called on page destroy
   */
    ngOnDestroy(): void {
      this.onDestroy$.next();
    }

    /**
   * Method to create form group
   */
     createFormGroup() {
      this.fgEditDoctor = this.formBuilder.group({
        firstname: ['', Validators.required],
        address1: ['', Validators.required],
        city: ['', Validators.required],
        email: ['', Validators.required],
        phoneno: ['', Validators.required],
        designation: [''],
        gender: ['', Validators.required],
      });
    }

    /**
   * Method to bind form data
   * @param formData 
   */
  bindFormData(formData: any) {
    if (formData) {
      this.fgEditDoctor.patchValue(this.editDoctorData);
    }
  }

    /**
   * Method to navigate to appointment list
   */
     routetoListDoctorScreen() {
    this.router.navigate(['admin/dashboard/listDoctor']);
  }

  
    editDoctor() {
      if (this.fgEditDoctor.status == Constants.FormInvalid) {
        this.toastService.errorMessage(Messages.Mandatory_Fields_Validation);
      } else {
        const fgValue = JSON.parse(JSON.stringify(this.fgEditDoctor.value));
        console.log('data is  ' + fgValue);
        this.callDoctorApi(fgValue);
      }
    }

      /**
    * Method to called update appointment api
    * @param respData 
    */
  callDoctorApi(respData: any) {
    this.isDataLoading = true;
    this.appointmentService.editDocAppointment(respData)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (retData: any) => {
          this.isDataLoading = false;
          if (retData.status) {
            this.toastService.successMessage(Messages.UpdateDoctorSuccess);
            this.fgEditDoctor.markAsPristine();
            this.routetoListDoctorScreen();
          } else {
            this.toastService.errorMessage(retData.message);
          }
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
  

}
