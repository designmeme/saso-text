import { NgModule } from '@angular/core';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../../environments/environment';

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

// feature modules
import {LayoutModule} from '../modules/layout/layout.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    }),
    AngularFireModule.initializeApp(environment.firebase, 'saso-text'),
    AngularFireDatabaseModule,
  ],
  exports: [
    BrowserAnimationsModule,
    LayoutModule,
    MetaModule,
    AngularFireModule,
    AngularFireDatabaseModule,
  ],
})
export class CoreModule { }
