import { Component, OnInit } from '@angular/core';
import { ContainerHistory } from 'app/staff-management/entities/containerHistory';
import { NgxSpinnerService } from 'ngx-spinner';
import { StaffManagementService } from '../../staff-management.service';


@Component({
  selector: 'app-waiting-container',
  templateUrl: './waiting-container.component.html',
  styleUrls: ['./waiting-container.component.css']
})
export class WaitingContainerComponent implements OnInit {
  panelOpenState = false;
  containerHistory:ContainerHistory[];

  constructor(
    private staffManagementService : StaffManagementService,
    private ngxSpinnerService: NgxSpinnerService,
  ) { 
    this.containerHistory = new Array<ContainerHistory>();
  }

  ngOnInit(): void {
    this.getWaitingConatiner()
  }

  HourFilter = [
    { value: "2", NAME: "2 Hr" },
    { value: "4", NAME: "4 Hr" },
    { value: "6", NAME: "6 Hr" },
    { value: "12",NAME: "12 Hr" },
    
  ];

  getWaitingConatiner():void{
    this.staffManagementService.getWaitingConatiner().subscribe(
      (arg) => {
      if(!arg.HasErrors){
        this.containerHistory=arg.rows;
     // alert(JSON.stringify(arg));
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
