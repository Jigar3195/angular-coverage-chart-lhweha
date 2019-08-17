import { Component, OnInit } from '@angular/core';
import { ClusterService } from '../cluster.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private clusterService: ClusterService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {

    this.clusterService.receiveCluster().subscribe(data => {
      console.log('data on home...', data);
      this.dashboardService.broadCastData(data);

    })
  }

}