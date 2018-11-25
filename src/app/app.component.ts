import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="/">Home</a>
  <a routerLink="/write/1">new year</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

  constructor() {
  }

}
