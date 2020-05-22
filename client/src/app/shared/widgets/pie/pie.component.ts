import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data: [];
  @Input('readerMode') readerMode: string;
  backgroundColor: string;
  textColor: string;

  constructor() { }

  ngOnInit() {
    if(this.readerMode === "dark-mode") {
      this.backgroundColor = "rgb(82, 82, 82)" 
      this.textColor = "rgb(255, 255, 255)" 
    } else {
      this.backgroundColor = "rgb(256, 256, 256)" 
      this.textColor = "rgb(0, 0, 0)" 
    }

    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Test Chart'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: this.data
      }]
  }
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
      
    }, 300);
  }

}
