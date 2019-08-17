import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeviceRoutes } from './devices.routing';
import { DevicesComponent } from './devices.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DeviceRoutes)
  ],
  declarations: [
    DevicesComponent
  ]
})
export class DevicesModule { }