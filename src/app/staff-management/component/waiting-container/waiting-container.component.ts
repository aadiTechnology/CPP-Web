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
  pagination:any;
  constructor(
    private staffManagementService : StaffManagementService,
    private ngxSpinnerService: NgxSpinnerService,
  ) { 
    this.containerHistory = new Array<ContainerHistory>();
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
    this.getWaitingConatiner()
  }

  HourFilter = [
    { value: "2", NAME: "2 Hr" },
    { value: "4", NAME: "4 Hr" },
    { value: "6", NAME: "6 Hr" },
    { value: "12",NAME: "12 Hr" },
    
  ];

  getWaitingConatiner():void{
    this.staffManagementService.getWaitingConatiner(this.pagination).subscribe(
      (arg) => {
      if(!arg.HasErrors){
        this.containerHistory=arg.records;
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


