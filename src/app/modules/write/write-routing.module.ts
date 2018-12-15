import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WriteComponent} from './pages/write/write.component';

const routes: Routes = [
  {
    path: ':id',
    component: WriteComponent,
    data: {
      meta: {
        title: '',
        description: ''
      }
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteRoutingModule { }
