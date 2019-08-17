import { Component, OnInit } from '@angular/core';
import { ChartConfig } from './chart.config';
import { ICoverage } from './coverage.model';
@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent extends ChartConfig implements OnInit {

  dataSet: ICoverage[] = [];

  constructor() {
    super();
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    const wifi = { x: 0, value: 0, signal: 0, name: 'WiFi hotspot', deviceType: 'wifi', mac: 'N/A' };
    this.dataSet = [];
    this.dataSet.push(wifi);
    this.generateChart(this.dataSet);
    this.chart.container(this.chartContainer.nativeElement);
    this.chart.draw();
  }

}