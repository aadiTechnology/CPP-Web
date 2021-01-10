import { Component, OnInit } from '@angular/core';
import { ContainerHistory } from 'app/staff-management/entities/containerHistory';
import { StaffManagementService } from 'app/staff-management/staff-management.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from "moment";

@Component({
  selector: 'app-vehicle-praking',
  templateUrl: './vehicle-praking.component.html',
  styleUrls: ['./vehicle-praking.component.css']
})
export class VehiclePrakingComponent implements OnInit {
  panelOpenState = false;
  containerHistory: ContainerHistory[];
  Hour:any;
  pagination:any;
  exportContainerHistory: any;
  constructor(
    private staffManagementService : StaffManagementService,
    private ngxSpinnerService: NgxSpinnerService,
  ) {
    this.containerHistory = new Array<ContainerHistory>();
    this.Hour = this.HourFilter[0].value;
    this.pagination= {
      PortId: 2,
      PageNumber: 1,
      PageSize: 5,
      FromDate: "01-01-2021",
      ToDate: "01-07-2021",
      TotalCount: 0,
      Records: [],
      SortBy: "abc",
      SortOrder: 1,
      Filter: null,
      Hour:null
    };
   }

  ngOnInit(): void {
    this.getConatinerHistory(this.pagination)
    
  }
  
  HourFilter = [
    { value: "2",NAME: "2 Hr" },
    { value: "4",NAME: "4 Hr" },
    { value: "6",NAME: "6 Hr" },
    { value: "12",NAME: "12 Hr" }
  ];

  getConatinerHistory(pagination):void{
    this.staffManagementService.getConatinerHistory(pagination).subscribe(
      (arg) => {
      if(!arg.HasErrors){
        this.containerHistory=arg.records;
        this.pagination.pageNumber=arg.pageNumber;
        this.pagination.pageSize=arg.pageSize;
        this.pagination.totalCount=arg.totalCount;
      }
      else{
        alert("else Somthing Wrong")
      }
    },
    (err)=>{
      alert('err Somthing Wrong')
    });
  }

  ExportVehicleData(pagination):void{
    this.staffManagementService.ExportVehicleData(pagination).subscribe(
      (arg) => {
      if(!arg.HasErrors){
        this.exportContainerHistory=arg.records;
        this.exportToExcel();
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

  onHourSelect(event) {
    console.log(event.currentTarget.attributes.value.nodeValue);
    this.Hour = +event.currentTarget.attributes.value.nodeValue;
    this.staffManagementService.setHour(+event.currentTarget.attributes.value.nodeValue)
  }

  exportToExcel(): void {
    if(this.exportContainerHistory.length !==0)
    {
      const edata: Array<ExcelJson> = [];
    const udt: ExcelJson = {
      data: [
        { A: "Vehicle parking Data" }, // title
        {
          A: "Receipt No.",
          B: "Dest.",
          C: "Vehicle No",
          D: "Amount (RS)",
          E: "Container No 1",
          F: "Seal #1",
          G: "CHA Number",
          H: "Shipping Bill Number",
          I: "Shipping Bill Date",
          J: "In Time Date",
          K: "In Operator",
          L: "Out Time Date",
          M: "Out Operator",
          N: "Payment Mode",
          O: "Custom Date",
          P: "Custom Date Time",
          Q: "Custom Officer",
        },
      ],
      skipHeader: true,
    };
    this.exportContainerHistory.forEach((history) => {
      udt.data.push({
        A: history.id,
        B: history.receiptNo,
        C: history.destination,
        D: history.vehicleNumber,
        E: history.amount,
        F: history.containerNumber,
        G: history.sealNumber1,
        H: history.chaNumber,
        I: history.shippingBillNumber,
        J:history.shippingBillDate === null ? '' : moment(history.shippingBillDate).format("MM-DD-yyy"),
        K: history.inDateTime,
        L: history.operatorName,
        M: history.outDateTime,
        N: history.checkOutOperator,
        O: history.paymentMode,
        P:history.customDateTime === null ? '' : moment(history.customDateTime).format("MM-DD-yyy"),
        Q:history.customDateTime === null ? '' :moment(history.customDateTime).format("MM-DD-yyy"),
        R: history.customOfficer,
        
      });
    });
    edata.push(udt);

    this.staffManagementService.exportJsonToExcel(edata, "vehicle_parkin_data");
    }
    else{
      alert("No data to Export");
    }
  }

  onPageChange(event){
    console.log(event);
    this.pagination.pageNumber=event.PageIndex;
    this.pagination.pageSize=event.PageSize;
    this.getConatinerHistory(this.pagination);
  }

}

export interface ExcelJson {
  data: Array<any>;
  header?: Array<string>;
  skipHeader?: boolean;
  origin?: string | number;
}
