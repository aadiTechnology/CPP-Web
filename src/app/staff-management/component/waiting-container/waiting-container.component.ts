import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-container',
  templateUrl: './waiting-container.component.html',
  styleUrls: ['./waiting-container.component.css']
})
export class WaitingContainerComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
