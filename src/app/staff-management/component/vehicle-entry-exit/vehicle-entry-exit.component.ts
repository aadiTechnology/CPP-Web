import { Component, OnInit } from '@angular/core';
import { GetEntryExist } from 'app/staff-management/entities/entryExitDetails';
import { StaffManagementService } from 'app/staff-management/staff-management.service';
import * as moment from "moment";

@Component({
  selector: 'app-vehicle-entry-exit',
  templateUrl: './vehicle-entry-exit.component.html',
  styleUrls: ['./vehicle-entry-exit.component.css']
})
export class VehicleEntryExitComponent implements OnInit {

  entryExitDeatails: GetEntryExist[];
  entryexistdetails: any;
  constructor(
    private staffManagementService:StaffManagementService,
  ) {
    this.entryExitDeatails = new Array<GetEntryExist>();
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
        this.entryExitDeatails = arg;
        if(arg){
          const categories = arg.records.map((x) => 
            moment(x.date).format("MM-DD-yyy")
          );
          const entryCount = arg.records.map((x) => x.entryCount);
          const existCount = arg.records.map((x) => x.existCount);

          this.entryexistdetails({ categories,entryCount,existCount})
         
        }
       
      }
    })
  }
}
