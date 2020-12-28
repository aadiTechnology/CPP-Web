import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class TerminalOperatorService {
  private _portNumber = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) { }

  getEntryExit(data): any {
    return this.httpService.postAnonymous('Report/GetEntryExist', data);
  }
  getByVehicalType(data): any {
    return this.httpService.postAnonymous('Report/GetCheckInCountByVehicalType', data);
  }

  getPort() {
    return this._portNumber.asObservable();
  }

  setPort(pNumber) {
    this._portNumber.next(pNumber)
  }
}
