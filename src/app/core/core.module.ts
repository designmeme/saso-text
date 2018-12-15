import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../../environments/environment';

// fontawesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopyright} from '@fortawesome/free-regular-svg-icons/faCopyright';
library.add(faCopyright);

// ngx-meta default setting
import {MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning} from '@ngx-meta/core';
export function metaFactory(): MetaLoader {
  const origin = 'https://saso-text.com';
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: '사소한 대필',
    applicationUrl: origin,
    defaults: {
      title: '사소한 대필',
      description: '설명',
      author: '제이의스튜디오',
      // og tags https://developers.facebook.com/docs/sharing/webmasters
      'og:image': `${origin}/assets/images/og/home.png`, // full url
      'og:type': 'website',
      'og:locale': 'ko_KR',
      // property="fb:app_id"가 아닌 name="fb:app_id"로 설정되어서 index.html에 직접 작성함.
      // 'fb:app_id': '',
    }
  });
}

// LayoutComponent
import {RouterModule} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, // for LayoutComponent

    BrowserAnimationsModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    }),
    AngularFireModule.initializeApp(environment.firebase, 'saso-text'),
    AngularFireDatabaseModule,
    FontAwesomeModule,
  ],
  exports: [
    LayoutComponent,
    BrowserAnimationsModule,
    MetaModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    FontAwesomeModule,
  ],
})
export class CoreModule { }
