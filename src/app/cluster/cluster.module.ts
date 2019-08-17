import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './cluster.routing';
import { ClusterComponent } from './cluster.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared.module';



@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule,
    RouterModule.forChild(rootRouterConfig)
  ],
  declarations: [
    ClusterComponent
  ]
})
export class ClusterModule { }