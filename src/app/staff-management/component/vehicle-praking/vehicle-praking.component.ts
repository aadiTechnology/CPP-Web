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
