import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-terminal',
  templateUrl: './dashboard-terminal.component.html',
  styleUrls: ['./dashboard-terminal.component.css']
})
export class DashboardTerminalComponent implements OnInit {
  pie: any;
  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("barGraph", {
      type: "bar",
      data: {
        labels: ["05-Dec", "06-Dec", "07-Dec", "08-Dec", "09-Dec", "10-Dec"],
        datasets: [
          {
            type:"bar",
           
            data: [444, 256, 165, 70, 156, 265, 356, 543],
            backgroundColor:"rgba(248, 148, 6, 1)",
            borderColor: "rgba(248, 148, 6, 1)",
            fill:false,
            label: "Vehicle Entry",
          },
          {
            type:"bar",
            
            data: [243, 156, 365, 30, 156, 265, 356, 543].reverse() ,
            backgroundColor:"rgba(1, 152, 117, 1)",
            borderColor: "rgba(1, 152, 117, 1)",
            fill:false,
            label: "Vehicle Exit",
          }, 
        ],
      },
      options: {
       
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  
  
  this.pie = new Chart('pie',{
    type: 'pie',
    options: {
      responsive: true,
    },
    data: {
      datasets: [{
        data: [45,10,5,25].reverse(),
        backgroundColor: ["red","orange","yellow","purple"],
        label: 'Dataset 1'
      }],
      labels: ["20 feet","20*20 feet","40 feet","ODC"]
    }
  })
  }

}
