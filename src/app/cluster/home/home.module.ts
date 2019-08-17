/// <reference path="../../../../node_modules/anychart/dist/index.d.ts"/>

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { CoverageComponent } from '../coverage/coverage.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    CoverageComponent
  ]
})
export class HomeModule { }