import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { MetaGuard } from '@ngx-meta/core';

import {HomeComponent} from './home/home/home.component';
import {WriteComponent} from './write/write/write.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [MetaGuard],
  },
  {
    path: 'write/:id',
    component: WriteComponent,
    canActivate: [MetaGuard],
  },
  { path: '**',      redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      // enableTracing: !environment.production, // debugging purposes only
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
