import { Component, OnInit } from '@angular/core';
import { ContainerHistory } from 'app/staff-management/entities/containerHistory';
import { NgxSpinnerService } from 'ngx-spinner';
import { StaffManagementService } from '../../staff-management.service';
import * as moment from "moment";


@Component({
  selector: 'app-waiting-container',
  templateUrl: './waiting-container.component.html',
  styleUrls: ['./waiting-container.component.css']
})
export class WaitingContainerComponent implements OnInit {
  panelOpenState = false;
  containerHistory:ContainerHistory[];
  pagination:any;
  Hour:any
  exportWaitingContainer: any;
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
    this.getWaitingConatiner(this.pagination)
  }

  HourFilter = [
    { value: "2", NAME: "2 Hr" },
    { value: "4", NAME: "4 Hr" },
    { value: "6", NAME: "6 Hr" },
    { value: "12",NAME: "12 Hr" },
    
  ];

  getWaitingConatiner(pagination):void{
    this.staffManagementService.getWaitingConatiner(pagination).subscribe(
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

  ExportWaitingContainerData(pagination):void{
    this.staffManagementService.ExportWaitingContainerData(pagination).subscribe(
      (arg) => {
      if(!arg.HasErrors){
        this.exportWaitingContainer=arg.records;
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
    if(this.exportWaitingContainer.length !==0)
    {
      const edata: Array<ExcelJson> = [];
    const udt: ExcelJson = {
      data: [
        { A: "Waiting Container" }, // title
        {
          A: "No.",
          B: "Reciept No",
          C: "Destination",
          D: "Vehicle No",
          E: "Amount",
          F: "Container No",
          G: "Seal No 1",
          H: "CHA No",
          I: "Shipping Bill No",
          J: "Shipping Bill Date",
          K: "In DateTime",
         // L: "Out Time Date",
         L: "Operator Name",
          M: "Out DateTime",
          N: "CheckOut Operator",
          O: "paymentMode",
          P: "Custom DateTime",
       //   Q: "Custom DateTime",
          R: "customOfficer",
        },
      ],
      skipHeader: true,
    };
    this.exportWaitingContainer.forEach((history) => {
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
      //  Q:history.customDateTime === null ? '' :moment(history.customDateTime).format("MM-DD-yyy"),
        R: history.customOfficer,
        
      });
    });
    edata.push(udt);

    this.staffManagementService.exportJsonToExcel(edata, "vehicle_Waiting _data");
    }
    else{
      alert("No data to Export");
    }
  }

  onPageChange(event){
    console.log(event);
    this.pagination.pageNumber=event.PageIndex;
    this.pagination.pageSize=event.PageSize;
    this.getWaitingConatiner(this.pagination);
  }
}

export interface ExcelJson {
  data: Array<any>;
  header?: Array<string>;
  skipHeader?: boolean;
  origin?: string | number;
}
