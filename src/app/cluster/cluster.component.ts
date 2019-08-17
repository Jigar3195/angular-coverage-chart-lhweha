import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClusterService } from './cluster.service';
import { chartData } from '../appconstants';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {

  navLinks = [];
  constructor(private route: ActivatedRoute,
    private clusterService: ClusterService) {


    this.route.params.subscribe(params => {
      console.log('hello world');
      console.log(params);

      this.navLinks = [
        {
          path: `home`,
          label: 'Home',
          name: 'home',
          isDisplay: true
        },
        {
          path: `devices`,
          label: 'Devices',
          name: 'devices',
          isDisplay: true
        }
      ];

      if (params['id']) {
        this.clusterService.broadCastCluster(chartData[params['id']]);
      }
    });
  }

  ngOnInit() {
  }

}