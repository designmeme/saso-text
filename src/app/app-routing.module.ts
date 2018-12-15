import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { environment } from '../environments/environment';

import {MetaGuard} from '@ngx-meta/core';

import {LayoutComponent} from './modules/layout/pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [MetaGuard],
    children: [
      {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule',
      },
      {
        path: 'write',
        loadChildren: './modules/write/write.module#WriteModule',
      },
    ],
  },

  { path: '**',      redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      preloadingStrategy: PreloadAllModules,
      // enableTracing: !environment.production, // debugging purposes only
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
