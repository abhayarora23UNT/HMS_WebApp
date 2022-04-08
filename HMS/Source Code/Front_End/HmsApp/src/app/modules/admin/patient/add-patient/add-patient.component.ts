import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  Genders: string[] = [
    'Male',
    'Female'
  ]
  fgAddPatient!: FormGroup;
  isDataLoading = false;
  constructor(private router: Router,private formBuilder: FormBuilder,) {
    this.createFormGroup();
  }

  ngOnInit(): void {
  }
  createFormGroup() {
    this.fgAddPatient = this.formBuilder.group({
      name: ['', Validators.required],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phoneno: ['', Validators.required],
      disease: [''],
      gender: ['', Validators.required],
    });
  }
  createAppointment(){

  }
  navigateToListAppointmentScreen() {
    this.router.navigate(['admin/dashboard/listPatient']);
  }
}