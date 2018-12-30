import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import {filter, map, mergeMap} from 'rxjs/internal/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  title = '';
  subscription: Subscription;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    iconRegistry.addSvgIcon(
        'logo',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/logo.svg'));

    // 라우트 변경에 따라 헤더 타이틀을 변경한다.
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      // 메타 데이터를 그대로 활용한다.
      this.title = data.meta && data.meta.title ? data.meta.title : '';
      // console.log(this.title, 'layout title');
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
