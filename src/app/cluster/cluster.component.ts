import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {

  navLinks = [];
  constructor() {

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
  }

  ngOnInit() {
  }

}