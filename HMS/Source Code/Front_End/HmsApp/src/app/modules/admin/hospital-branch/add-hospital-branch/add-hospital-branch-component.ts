import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-hospital-branch',
  templateUrl: './add-hospital-branch.component.html',
  styleUrls: ['./add-hospital-branch.component.scss']
})
export class AddHospitalBranchComponent implements OnInit {
  fgAddHospitalBranch!: FormGroup;
  isDataLoading = false
  constructor(private router: Router,private formBuilder: FormBuilder) {
    this.createFormGroup();
   }

  ngOnInit(): void {
    console.log('123');
  }

  createFormGroup() {
    this.fgAddHospitalBranch = this.formBuilder.group({
      name: ['', Validators.required],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  navigateToListAppointmentScreen() {
    this.router.navigate(['admin/dashboard/listHospitalBranch']);
  }

  createAppointment(){

  }

}