import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {

  appointmentColumns: string[] = ['name', 'disease', 'mobileno', 'gender', 'email','action'];
  isDataLoading = false; // flag to hide/show loader
  dataSource: any = []; 
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Method to navigate to edit appointment page
   * @param event 
   */
   editAppointment(event: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentData: JSON.stringify(event)
      }
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
    this.router.navigate(["admin/dashboard/addPatient"]);
  }

}