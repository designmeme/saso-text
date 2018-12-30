import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {MatIconModule, MatSliderModule} from '@angular/material';

// fontawesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';
import {faShare, faCopy} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSliderModule,
    FontAwesomeModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSliderModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {
  constructor() {
    library.add(faCopyright);
    library.add(faCopy);
    library.add(faShare);
  }

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
