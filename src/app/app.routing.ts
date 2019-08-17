import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component'
export const rootRouterConfig: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'cluster',
        loadChildren: './cluster/cluster.module#ClusterModule'
      }
    ]
  }
];
