import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatSelectModule, MatSidenavModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from './shared.module';
import { ClusterService } from './cluster/cluster.service';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatListModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [ClusterService, { provide: APP_BASE_HREF, useValue: '/' }],
  declarations: [AppComponent, HelloComponent, AdminLayoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
