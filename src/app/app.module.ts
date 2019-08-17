import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatSelectModule,MatSidenavModule,MatFormFieldModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {Component} from "@angular/core";
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routing';
@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  MatSidenavModule,
                  MatFormFieldModule,
                  MatSelectModule,
                  BrowserAnimationsModule,
                  MatListModule,
                  RouterModule.forRoot(rootRouterConfig)
                  ],
  declarations: [ AppComponent, HelloComponent, AdminLayoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
