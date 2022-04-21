import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Constants, ModuleConstants } from 'src/app/core/constants/constants';
import { Messages } from 'src/app/core/messages/messages';
import { TreatmentService } from 'src/app/core/services/doctor/doctor-treatment.service';
import { LookupService } from 'src/app/core/services/lookups/lookups.service';
import { CommonUtilsService } from 'src/app/core/services/utils/common-utils.service';
import { ToastMessageService } from 'src/app/core/services/utils/toast-message.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit, OnDestroy {
  Genders: string[] = [
    'Male',
    'Female'
  ]
  fgAddDoctor!: FormGroup;
  isDataLoading = false;
  private onDestroy$: Subject<void> = new Subject<void>();
  constructor(private formBuilder: FormBuilder, private treatmentService: TreatmentService, private toastService: ToastMessageService,
    private router: Router, private lookupService: LookupService, private commonUtilsService: CommonUtilsService) {
    this.createFormGroup();
    
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
    this.fgAddDoctor = this.formBuilder.group({
      firstname: ['', Validators.required],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phoneno: ['', Validators.required],
      designation: [''],
      gender: ['', Validators.required],
    });
  }
  createDoctor(){

  }
  routetoListDoctorScreen() {
    this.router.navigate(['admin/dashboard/listDoctor']);
  }
}