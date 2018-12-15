import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WriteComponent} from './pages/write/write.component';

const routes: Routes = [
  {
    path: 'happy-new-year',
    component: WriteComponent,
    data: {
      meta: {
        title: '새해 인사 메세지 쓰기',
        description: '새해 인사 메세지 쓰기'
      },
    },
  },
  // {
  //   path: 'happy-birth-day',
  //   component: WriteComponent,
  //   data: {
  //     meta: {
  //       title: '새해 인사 메세지 쓰기',
  //       description: '새해 인사 메세지 쓰기'
  //     },
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteRoutingModule { }
