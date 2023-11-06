import { Component, OnInit } from '@angular/core';
import {
  ApexChart,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
} from 'ng-apexcharts';

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  labels: any;
  plotOptions: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  chartOptions: Partial<PieChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [40, 32, 28],
      chart: {
        type: 'donut',
      },
      legend: {
        position: 'bottom',
        offsetY: 1,
      },
      labels: ["Men", "Electronics", "Women"],
      colors: ['#3d5bd0', '#506de2', '#8fa6fb'],
      title: {
        text: 'Top Products',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'normal',
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
              toolbar: {
                show: true,
              },
            },
          },
        },
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: '',
                formatter: () => `Popular Items`
              },
            },
          },
        },
      },
    };
  }

  ngOnInit(): void { }
}
