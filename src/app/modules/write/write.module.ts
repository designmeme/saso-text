import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import { WriteRoutingModule } from './write-routing.module';

import {WriteComponent} from './pages/write/write.component';
import {ShareDialogComponent} from './pages/share-dialog/share-dialog.component';

@NgModule({
  declarations: [
    WriteComponent,
    ShareDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WriteRoutingModule
  ],
  entryComponents: [
    ShareDialogComponent,
  ],
})
export class WriteModule { }
