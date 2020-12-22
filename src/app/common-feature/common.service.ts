import { Injectable } from '@angular/core';
import { HttpService } from 'app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpService: HttpService,) { }

  login(user): any {
    const loginUser = { UserName: user.UserName, Password: user.Password };
    return this.httpService.postAnonymous('Account/Login', loginUser);
  }
}
