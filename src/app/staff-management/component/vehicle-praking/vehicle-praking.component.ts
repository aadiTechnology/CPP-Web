import { Component, OnInit } from '@angular/core';
import { ContainerHistory } from 'app/staff-management/entities/containerHistory';
import { StaffManagementService } from 'app/staff-management/staff-management.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-vehicle-praking',
  templateUrl: './vehicle-praking.component.html',
  styleUrls: ['./vehicle-praking.component.css']
})
export class VehiclePrakingComponent implements OnInit {
  panelOpenState = false;
  containerHistory: ContainerHistory[];

  constructor(
    private staffManagementService : StaffManagementService,
    private ngxSpinnerService: NgxSpinnerService,
  ) {
    this.containerHistory = new Array<ContainerHistory>();
   }

  ngOnInit(): void {
    this.getConatinerHistory()
  }
  
  HourFilter = [
    { value: "2"  , NAME: "2 Hr" },
    { value: "4"  , NAME: "4 Hr" },
    { value: "6"  , NAME: "6 Hr" },
    { value: "12" , NAME: "12 Hr" }
  ];

  getConatinerHistory():void{
    this.staffManagementService.getConatinerHistory().subscribe(
      (arg) => {
      if(!arg.HasErrors){
        this.containerHistory=arg.rows;
   //   alert(JSON.stringify(arg));
      }
      else{
        alert("else Somthing Wrong")
      }
    },
    (err)=>{
      alert('err Somthing Wrong')
    });
  }

}
