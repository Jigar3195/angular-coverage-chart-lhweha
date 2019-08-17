import { Component, OnInit } from '@angular/core';
import { ChartConfig } from './chart.config';
import { ICoverage } from './coverage.model';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css',
    '../../../../node_modules/anychart/dist/css/anychart-ui.min.css',
    '../../../../node_modules/anychart/dist/fonts/css/anychart-font.min.css']
})
export class CoverageComponent extends ChartConfig implements OnInit {

  dataSet: ICoverage[] = [];

  isPolar = false;

  constructor(private dashboardService: DashboardService) {
    super();
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {

    this.dashboardService.receiveData().subscribe(data => {
      console.log('data in coverage', data);

      this.isPolar = false;
      setTimeout(() => {
        this.isPolar = true;
      }, 100);

      setTimeout(() => {
        this.dataSet = data;
        // this.dataSet.push(wifi);
        this.generateChart(this.dataSet);
        this.chart.container(this.chartContainer.nativeElement);
        this.chart.draw();
      }, 200);

    })

    // const wifi = { x: 0, value: 0, signal: 0, name: 'WiFi hotspot', deviceType: 'wifi', mac: 'N/A' };

  }

}