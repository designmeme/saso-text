import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {FormBuilder, FormArray, FormGroup, FormControl} from '@angular/forms';

// firebase
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map, pluck, tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  messages: any[];

  levelControl: FormControl;
  levelMax = 3;
  level = 2;

  tags: any[];
  selectedTags = ['인사', '희망', '감사'];
  tagOpened = true;

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
  ) {
    this.levelControl = this.fb.control(this.level);
    this.levelControl.valueChanges.subscribe(level => {
      this.level = level;

      this.getMesssage();
    });

  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    const id = 'happy-new-year';

    this.db.list<any>(`/subjects`).valueChanges().pipe(
      map(list => list.find(item => item['id'] === id)),
    ).subscribe(
      data => {
        // 높임말 관련 설정
        this.levelMax = data.levels - 1;

        // 태그 정보 저장
        this.tags = data.tags;

        this.db.list(`/messages/${id}`).valueChanges().subscribe(
          list => {
            this.messages = list;
            this.getMesssage();
          }
        );
      }
    );
  }

  // 설정에 맞는 메세지를 가져온다.
  getMesssage() {
    console.log('getMessage', this.level, this.selectedTags);
  }

  // 선택된 태그인지 여부를 반환한다.
  isCheckedTag(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  // 태그 클릭을 처리하고, 메세지를 다시 불러온다.
  clickTag(tag: string) {
    if (this.isCheckedTag(tag)) {
      this.selectedTags = this.selectedTags.filter(text => text !== tag);
    } else {
      this.selectedTags.push(tag);
    }

    this.getMesssage();
  }
}
