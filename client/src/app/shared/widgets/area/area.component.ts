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
            type: 'area',
            backgroundColor: this.backgroundColor,  
            className: "chart-high"

        },
        title: {
            text: 'Time Spent Studying by Class',
            style: {
              "color": this.textColor
            }
        },
        subtitle: {
            text: '',
        },
        xAxis: [{
          labels: {
            style: {
              "color": this.textColor
            }
          }
        }],
        yAxis: [{
          labels: {
            style: {
              "color": this.textColor
            }
          },
          title: {
            style: {
              "color": this.textColor
            }
          }
        }],
        legend: {
            itemStyle: {
              "color": this.textColor
            }
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
