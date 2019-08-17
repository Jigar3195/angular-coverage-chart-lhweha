import { Routes } from '@angular/router';
import { ClusterComponent } from './cluster.component';
export const rootRouterConfig: Routes = [
  {
    path: '',
    component: ClusterComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        data: { title: 'Home', breadcrumb: '', name: 'home' },
      },
      {
        path: 'devices',
        loadChildren: './devices/devices.module#DevicesModule',
        data: { title: 'Devices', breadcrumb: '', name: 'devices' },
      },
    ]
  }
];
