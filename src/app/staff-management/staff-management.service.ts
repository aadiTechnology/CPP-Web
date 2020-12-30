import { Injectable } from '@angular/core';
import { HttpService } from '../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class StaffManagementService {

  constructor(
    private httpService:HttpService,
  ) { }

  getEntryExit(data): any {
    return this.httpService.postAnonymous('Report/GetEntryExist', data);
  }


}
