import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import {OwlModule} from 'ngx-owl-carousel';

import {HomeComponent} from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    OwlModule,
  ]
})
export class HomeModule { }
