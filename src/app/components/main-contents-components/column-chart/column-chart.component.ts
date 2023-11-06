import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexResponsive,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: any;
  fill: ApexFill;
  responsive: ApexResponsive[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {
  chartTitle: ApexTitleSubtitle = {
    text: 'Balance Overview',
    align: 'left',
    style: {
      fontSize: '16px',
      fontWeight: 'normal',
    }
  };

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Income",
          group: "budget",
          data: [90, 110, 70, 120, 90, 10, 30, 40, 115, 150, 80, 40]
        },
        {
          name: "Borrowed",
          group: "budget",
          data: [90, 50, 40, 40, 70, 60, 70, 120, 65, 30, 40, 10]
        }
      ],
      colors: ['#4f6ee1', '#c0cefe'],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
      },
      stroke: {
        width: 12,
        colors: ["#8fa6fb"]
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: 4
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      axisBorder: {
        show: false,
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "right"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              toolbar: {
                show: true,
              },
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void { }
}