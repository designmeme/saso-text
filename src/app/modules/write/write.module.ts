import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import { WriteRoutingModule } from './write-routing.module';

import {WriteComponent} from './pages/write/write.component';

@NgModule({
  declarations: [
    WriteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WriteRoutingModule
  ]
})
export class WriteModule { }
