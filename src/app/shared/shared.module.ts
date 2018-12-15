import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {MatIconModule, MatSliderModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSliderModule,
    HttpClientModule,
  ],
  exports: [
    MatIconModule,
    MatSliderModule,
    HttpClientModule,
  ],
})
export class SharedModule {
  // constructor(
  //   iconRegistry: MatIconRegistry,
  //   sanitizer: DomSanitizer,
  // ) {
  //
  //
  //   iconRegistry.addSvgIcon(
  //     'icon-sns-fb',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon-sns-facebook.svg'));
  //   iconRegistry.addSvgIcon(
  //     'icon-sns-kakao',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon-sns-kakaotalk.svg'));
  //   iconRegistry.addSvgIcon(
  //     'icon-sns-line',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon-sns-line.svg'));
  // }
}
