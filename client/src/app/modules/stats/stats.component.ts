import { ReaderModeService } from './../reader-mode.service';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  // @Input('readerMode') readerMode:string;
  bigChart = [];
  cards = [];
  pieChart = [];
  table = [];
  readerMode = "";

  constructor(
    private dashboardService: DashboardService,
    private readerModeService: ReaderModeService,
    ) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.table = this.dashboardService.table();
    this.readerMode = this.readerModeService.getMode()
    console.log(this.readerMode)
  }

}
