import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as Chartist from "chartist";
import { Chart } from "chart.js";
import AOS from "aos";
import * as Highcharts from "highcharts";
import highcharts3D from "highcharts/highcharts-3d";
import { GetEntryExist } from "app/terminal-operator/entities/getEntryExit";
import { TerminalOperatorService } from "app/terminal-operator/terminal-operator.service";
highcharts3D(Highcharts);
import * as moment from "moment";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-dashboard-terminal",
  templateUrl: "./dashboard-terminal.component.html",
  styleUrls: ["./dashboard-terminal.component.css"],
})
export class DashboardTerminalComponent implements OnInit {
  @ViewChild("barcontainer") barcontainer: ElementRef;
  pie: any;
  public label;
  barGraph: any;
  paiChart: any;
  entryExitDeatails: GetEntryExist[];
  pagination = {
    PortId: 2,
    PageNumber: 0,
    PageSize: 0,
    FromDate: "01-01-2017",
    ToDate: "01-07-2017",
    TotalCount: 0,
    Records: [],
    SortBy: "abc",
    SortOrder: 1,
    Filter: "null",
  };
  constructor(private terminalOperatorService: TerminalOperatorService, private ngxSpinnerService: NgxSpinnerService,) {
    this.entryExitDeatails = new Array<GetEntryExist>();
    // piechart.
    this.terminalOperatorService.getPort().subscribe(e => {
      if (e.length !== 0) {
        console.log(e);
        this.pagination.PortId = e;
        this.getEntryExit(this.pagination);
      }
    })

  }
  ngOnInit(): void {
    const currentDate = new Date();
    const fromDate = moment([
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDay() - 7,
    ]).format("MM-DD-yyy");
    const toDate = moment([
      currentDate.getMonth(),
      currentDate.getDay(),
      currentDate.getFullYear(),
    ]).format("MM-DD-yyy");
    // this.pagination.FromDate = fromDate;
    // this.pagination.ToDate = toDate;
    this.getEntryExit(this.pagination);
    this.getByVehicalType(this.pagination);
    // Highcharts.chart("barcontainer", this.barGraph);
    AOS.init();
  }
  getEntryExit(data): void {
    this.ngxSpinnerService.show();
    this.terminalOperatorService.getEntryExit(data).subscribe((arg) => {
      if (arg) {
        this.entryExitDeatails = arg;
        if (arg) {
          const categories = arg.records.map((x) =>
            moment(x.date).format("MM-DD-yyy")
          );
          const entryCount = arg.records.map((x) => x.entryCount);
          const exitCount = arg.records.map((x) => x.existCount);
          this.createBarChart({ categories, entryCount, exitCount });
        }
      }
    }, err => {
      this.ngxSpinnerService.hide();
    });
  }

  createBarChart(data) {
    this.barGraph = {
      title: { text: "Vehicle Entry v/s Vehicle Exit" },
      chart: {
        type: "column",
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          viewDistance: 25,
          depth: 40,
        },
      },
      xAxis: {
        categories: data.categories,
        labels: {
          skew3d: true,
          style: {
            fontSize: "10px",
          },
        },
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
      },
      credits: {
        enabled: false,
      },

      plotOptions: {
        column: {
          stacking: "normal",
          depth: 40,
        },
      },
      series: [
        {
          name: "Vehicle Entry",
          data: data.entryCount,
          stack: "Entry",
        },
        {
          name: "Vehicle Exit",
          data: data.exitCount,
          stack: "Exit",
        },
      ],
    };
    Highcharts.chart(this.barcontainer.nativeElement, this.barGraph);
    this.ngxSpinnerService.hide();
  }
  createPieChart(data) {
    this.paiChart = {
      title: { text: "Occupancy by Vehicle Type" },

      chart: {
        type: "pie",
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0,
        },
      },
      credits: {
        enabled: false,
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          depth: 35,
          dataLabels: {
            enabled: true,
            connectorWidth: 1,
            distance: 1,
            format: "{point.name}",
          },
          showInLegend: true,
        },
      },
      series: [
        {
          type: "pie",
          data: data
        },
      ],
    };
    Highcharts.chart("container", this.paiChart);
    this.ngxSpinnerService.hide();
  }
  getByVehicalType(data) {
    this.terminalOperatorService.getByVehicalType(data).subscribe((arg) => {
      if (arg) {
        if (arg) {
          arg.records.map(b => {
            if (b.type === '1') {
              b.type = "20 ft"
            }
            if (b.type === '2') {
              b.type = "40 ft"
            }
            if (b.type === '3') {
              b.type = "20*20 ft"
            }
            if (b.type === '4') {
              b.type = "ODC"
            }
          })
          var data = arg.records.map(a => Object.values(a));
          this.createPieChart(data);
        }
      }
    });

  }
}
