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
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit, OnDestroy {

  fgEditPatient!: FormGroup;
  isDataLoading = false;
  private onDestroy$: Subject<void> = new Subject<void>();
  genderList: any =[];

  editPatientData: any;
  constructor(private formBuilder: FormBuilder, private appointmentService: DoctorAppointmentService, private toastService: ToastMessageService,
    private router: Router, private lookupService: LookupService, private commonUtilsService: CommonUtilsService, private route: ActivatedRoute) {
    this.createFormGroup();

    // get existing appointment data from routing params //
    this.route.queryParams.subscribe(params => {
      if (params && params['editPatientData']) {
        this.editPatientData = JSON.parse(params['editPatientData']);
      }
    });

  }

  ngOnInit(): void {
  }

  /**
   * Method called on page destroy
   */
   ngOnDestroy(): void {
    this.onDestroy$.next();
  }


  createFormGroup() {
    this.editPatientData = this.formBuilder.group({
      name: ['', Validators.required],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phoneno: ['', Validators.required],
      disease: [''],
      gender: ['', Validators.required],
    });
  }

    /**
   * Method to bind form data
   * @param formData 
   */
     bindFormData(formData: any) {
      if (formData) {
        this.fgEditPatient.patchValue(this.editPatientData);
      }
    }

    navigateToListPatientScreen() {
      this.router.navigate(['admin/dashboard/listPatient']);
    }

    editPatient() {
      if (this.fgEditPatient.status == Constants.FormInvalid) {
        this.toastService.errorMessage(Messages.Mandatory_Fields_Validation);
      } else {
        const fgValue = JSON.parse(JSON.stringify(this.fgEditPatient.value));
        console.log('data is  ' + fgValue);
        this.callPatientApi(fgValue);
      }
    }

       /**
    * Method to called update appointment api
    * @param respData 
    */
        callPatientApi(respData: any) {
    this.isDataLoading = true;
    this.appointmentService.editDocAppointment(respData)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (retData: any) => {
          this.isDataLoading = false;
          if (retData.status) {
            this.toastService.successMessage(Messages.UpdatePatientSuccess);
            this.fgEditPatient.markAsPristine();
            this.navigateToListPatientScreen();
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
