import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class StaffManagementService {
  private _portNumber = new BehaviorSubject<any>([]);

  constructor(
    private httpService:HttpService,
  ) { }

  getEntryExit(data): any {
    return this.httpService.postAnonymous('Report/GetEntryExist', data);
  }

  getConatinerHistory():any{
    return this.httpService.get('Report/GetContainerHistory');
  }

  getWaitingConatiner():any{
    return this.httpService.get('Report/GetWaitingContainer');
  }

  getPort() {
    return this._portNumber.asObservable();
  }

  setPort(pNumber) {
    this._portNumber.next(pNumber)
  }

}
