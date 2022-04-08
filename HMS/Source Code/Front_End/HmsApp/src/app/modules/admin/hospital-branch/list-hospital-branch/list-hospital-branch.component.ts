import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-hospital-branch',
  templateUrl: './list-hospital-branch.component.html',
  styleUrls: ['./list-hospital-branch.component.scss']
})
export class ListHospitalBranchComponent implements OnInit {
  isDataLoading = false; // flag to hide/show loader
  dataSource: any = [];
  appointmentColumns: string[] = ['name', 'address1', 'mobileno', 'email','city', 'action'];  // table columns
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Method to navigate to add appointment screen.
   */
   navigateToAppointment() {
    this.router.navigate(["admin/dashboard/addHospitalBranch"]);
  }

  editAppointment(data:any){

  }
  deleteAppointment(data:any){

  }

}