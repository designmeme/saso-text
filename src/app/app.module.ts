import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// ngx-meta default setting
import {MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning} from '@ngx-meta/core';
export function metaFactory(): MetaLoader {
  const origin = 'https://website.com';
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: '앱이름',
    applicationUrl: origin,
    defaults: {
      title: '제목',
      description: '설명',
      author: '이지혜',
      // og tags https://developers.facebook.com/docs/sharing/webmasters
      'og:image': `${origin}/assets/images/og/home.png`, // full url
      'og:type': 'website',
      'og:locale': 'ko_KR',
      // property="fb:app_id"가 아닌 name="fb:app_id"로 설정되어서 index.html에 직접 작성함.
      // 'fb:app_id': '',
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    }),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
