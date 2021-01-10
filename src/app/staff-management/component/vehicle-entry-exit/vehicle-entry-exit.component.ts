import { Component, OnInit } from '@angular/core';
import { StaffManagementService } from 'app/staff-management/staff-management.service';
import * as moment from "moment";

@Component({
  selector: 'app-vehicle-entry-exit',
  templateUrl: './vehicle-entry-exit.component.html',
  styleUrls: ['./vehicle-entry-exit.component.css']
})
export class VehicleEntryExitComponent implements OnInit {

  
  pagination: any;
  constructor(
    private staffManagementService:StaffManagementService,
  ) {
    this.pagination= {
      PortId: 2,
      PageNumber: 1,
      PageSize: 10,
      FromDate: "01-01-2021",
      ToDate: "01-07-2021",
      TotalCount: 0,
      Records: [],
      SortBy: "abc",
      SortOrder: 1,
      Filter: "null",
    };
   }

  ngOnInit(): void {
    const currentDate =new Date();
    const fromDate = moment([
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDay() -30
    ]).format("MM-DD-yyy");
    const toDate = moment([
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDay(),
    ]).format("MM-DD-yyy")

  }

  getEntryExit(data):void {
    this.staffManagementService.getEntryExit(data).subscribe((arg)=>{
      if(arg){
        this.pagination = arg;
        if(arg){
          const categories = arg.records.map((x) => 
            moment(x.date).format("MM-DD-yyy")
          );
          const entryCount = arg.records.map((x) => x.entryCount);
          const existCount = arg.records.map((x) => x.existCount);

          this.pagination({ categories,entryCount,existCount})
         
        }
       
      }
    })
  }
}
