import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

// carousel
import {OwlCarousel} from 'ngx-owl-carousel';

// firebase
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // @ViewChild('subjectCarousel') subjectCarousel: OwlCarousel;

  subjects$: Observable<any[]>;
  subjects;
  carouselOptions = {
    loop: true,
    dots: false,
    nav: true,
    navText: ['〈', '〉'],
    navSpeed: 0,
    items: 1,
    onChanged: (data) => {
      setTimeout(() => {
        const input = data.currentTarget.querySelector('.owl-item.active input');
        if (input) {
          const activeIndexValue = +input.value;
          const active = this.subjects[activeIndexValue];
          this.linkDisabled = !active.enable;
          this.activeIndex = activeIndexValue;
        }
      }, 0);
    },
  };
  linkDisabled = true;
  activeIndex = 0;

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
  ) {
    this.subjects$ = this.db.list('/subjects', ref => ref.orderByChild('position')).valueChanges();
    this.subjects$.subscribe(data => {
      this.subjects = data;
    });

  }

  ngOnInit() {
  }

  write() {
    this.router.navigate(['write', this.subjects[this.activeIndex].id]);
  }

}
