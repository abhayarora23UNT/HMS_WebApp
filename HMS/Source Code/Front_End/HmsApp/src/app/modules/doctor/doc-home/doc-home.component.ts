import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss']
})
export class DocHomeComponent implements OnInit {

  dashboardRecordsList: any = [];
  constructor() { }

  ngOnInit(): void {
    this.dashboardRecordsList = this.getRecordsList();
  }

  
  getRecordsList() {
    const dataList: any = [
      {
        "icon": "folder_special",
        "count": 10,
        "title": "Specializations",
        "color": "red"
      },
      {
        "icon": "supervisor_account",
        "count": 5,
        "title": "Doctors",
        "color": "blue"
      },
      {
        "icon": "person",
        "count": 2,
        "title": "Patients",
        "color": "green"
      },
      {
        "icon": "local_hospital",
        "count": 6,
        "title": "Hospital Branches",
        "color": "black"
      },
      {
        "icon": "access_time",
        "count": 8,
        "title": "Active Appointments",
        "color": "green"
      },
      {
        "icon": "timelapse",
        "count": 5,
        "title": "Pending Appointments",
        "color": "black"
      },
      {
        "icon": "medication",
        "count": 6,
        "title": "Medicines",
        "color": "black"
      },
      {
        "icon": "book_online",
        "count": 9,
        "title": "Admissions",
        "color": "black"
      },
      {
        "icon": "people_outline",
        "count": 8,
        "title": "Staff",
        "color": "black"
      },

    ];

    return dataList;
  }

  getStyleColor(index: any) {
    // console.log(index);
    return this.dashboardRecordsList[index].color;
  }
}
