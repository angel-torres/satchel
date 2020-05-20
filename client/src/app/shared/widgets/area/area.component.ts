import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})

export class AreaComponent implements OnInit { 
  chartOptions: {}; 
  Highcharts = Highcharts;

  @Input() data: [];
  @Input('readerMode') readerMode: string;
 
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Time Spent Studying by Class'
        },
        subtitle: {
            text: ''
        },
        tooltip: {
            split: true,
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: true
        },
        series: this.data
      }

      HC_exporting(Highcharts);

      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        )
        
      }, 300);
  }

 
}
