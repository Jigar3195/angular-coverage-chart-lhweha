import { NgModule } from '@angular/core';
import { ClusterService } from './cluster/cluster.service';


/*
  Only Required if you want to use Angular Landing
  (https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258)
*/
// import { LandingPageService } from '../shared/services/landing-page.service';

const classesToInclude = [
];

@NgModule({
  imports: [
  ],
  entryComponents: [],
  providers: [
    /* ClusterService */
  ],
  declarations: classesToInclude,
  exports: [
  ]
})
export class SharedModule { }
