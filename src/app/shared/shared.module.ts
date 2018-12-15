import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule, MatSliderModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSliderModule,
  ],
  exports: [
    MatIconModule,
    MatSliderModule,
  ],
})
export class SharedModule { }
