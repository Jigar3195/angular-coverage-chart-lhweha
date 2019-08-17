import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './cluster.routing';
import { ClusterComponent } from './cluster.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(rootRouterConfig)
  ],
  declarations: [
    ClusterComponent
  ]
})
export class ClusterModule { }