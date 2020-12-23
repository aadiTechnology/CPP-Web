import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Chart } from 'chart.js';
import AOS from 'aos';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

@Component({
  selector: 'app-dashboard-terminal',
  templateUrl: './dashboard-terminal.component.html',
  styleUrls: ['./dashboard-terminal.component.css']
})
export class DashboardTerminalComponent implements OnInit {
  pie: any;
  public label;
  barGraph:any;
  paiChart:any;
  constructor() { 

    // piechart
    this.paiChart = {
        title: {text: 'Occupancy by Vehicle Type'},
    
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
      }, credits: {
        enabled: false
      },
     
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              },
              showInLegend: true

          }
      },
      series: [{
          type: 'pie',
          data: [
              ['20 Feet', 10.0],
              ['20*20 Feet', 5.0],
              {
                  name: '40 Feet',
                  y: 45.0,
                  sliced: true,
                  selected: true
              },
              ['ODC', 40.0],
          ]
      }]
  };


//   bargraph

  this.barGraph = {
    title: {text: 'Vehicle Entry v/s Vehicle Exit'},
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },
    xAxis: {
        categories: ['17-Dec', '18-Dec', '19-Dec', '20-Dec', '21-Dec','22-Dec'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '12px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
    },
    credits: {
      enabled: false
    },
    

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },
    series: [{
        name: 'Vehicle Entry',
        data: [5, 3, 4, 7, 2,10],
        stack: 'Entry'
    },   {
        name: 'Vehicle Exit',
        data: [3, 0, 4, 4, 3],
        stack: 'Exit'
    }]
  }

  }

  ngOnInit(): void {
    Highcharts.chart('barcontainer', this.barGraph);
    Highcharts.chart('container', this.paiChart);
    AOS.init();
    
    
    
}
}
