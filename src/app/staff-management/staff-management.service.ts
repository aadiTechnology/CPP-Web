import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../core/services/http.service';
import { ExcelJson } from "./component/vehicle-praking/vehicle-praking.component";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const EXCEL_EXTENSION = ".xlsx";
const CSV_EXTENSION = ".csv";
const CSV_TYPE = "text/plain;charset=utf-8";

@Injectable({
  providedIn: 'root'
})
export class StaffManagementService {
  private _HourTime = new BehaviorSubject<any>([]);
  private _portNumber = new BehaviorSubject<any>([]);
 

  constructor(private httpService:HttpService) { }

  getEntryExit(data): any {
    return this.httpService.postAnonymous('Report/GetEntryExist', data);
  }

  getConatinerHistory(pagination):any{
    return this.httpService.post('Report/GetContainerHistory',pagination);
  }
  ExportVehicleData(pagination):any{
    return this.httpService.post('Report/ExportVehicleData',pagination);
  }
  ExportWaitingContainerData(pagination):any{
    return this.httpService.post('Report/ExportWaitingContainerData',pagination);
  }

  getWaitingConatiner(pagination):any{ 
    return this.httpService.post('Report/GetWaitingContainer',pagination);
  }

  getPort() {
    return this._portNumber.asObservable();
  }

  setPort(pNumber) {
    this._portNumber.next(pNumber)
  }

  getHour(){
    return this._HourTime.asObservable();
  }

  setHour(hTime){
    this._HourTime.next(hTime)
  }

/**
   * Creates XLSX option from the Json data. Use this to customise the sheet by adding arbitrary rows and columns.
   *
   * @param json Json data to create xlsx.
   * @param fileName filename to save as.
   */
  public exportJsonToExcel(json: ExcelJson[], fileName: string): void {
    // inserting first blank row
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      json[0].data,
      this.getOptions(json[0])
    );

    for (let i = 1, length = json.length; i < length; i++) {
      // adding a dummy row for separation
      XLSX.utils.sheet_add_json(
        worksheet,
        [{}],
        this.getOptions(
          {
            data: [],
            skipHeader: true,
          },
          -1
        )
      );
      XLSX.utils.sheet_add_json(
        worksheet,
        json[i].data,
        this.getOptions(json[i], -1)
      );
    }
    const workbook: XLSX.WorkBook = {
      Sheets: { Sheet1: worksheet },
      SheetNames: ["Sheet1"],
    };
    // save to file
    XLSX.writeFile(workbook, `${fileName}${EXCEL_EXTENSION}`);
  }

  /**
   * Creates XLSX option from the data.
   *
   * @param json Json data to create xlsx.
   * @param origin XLSX option origin.
   * @returns options XLSX options.
   */
  private getOptions(json: ExcelJson, origin?: number): any {
    // adding actual data
    debugger;
    const options = {
      skipHeader: true,
      origin: -1,
      header: [],
    };
    options.skipHeader = json.skipHeader ? json.skipHeader : false;
    if (!options.skipHeader && json.header && json.header.length) {
      options.header = json.header;
    }
    if (origin) {
      options.origin = origin ? origin : -1;
    }
    return options;
  }

}

