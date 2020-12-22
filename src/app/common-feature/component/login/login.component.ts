import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  
}
