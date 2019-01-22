import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl} from '@angular/forms';

import {BehaviorSubject, of} from 'rxjs';
import {delay, map} from 'rxjs/internal/operators';

// firebase
import {AngularFireDatabase} from '@angular/fire/database';
import {MatDialog} from '@angular/material';
import {ShareDialogComponent} from '../share-dialog/share-dialog.component';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  messages: any[];
  msgControl: FormControl;

  copied$ = new BehaviorSubject(false);

  levelControl: FormControl;
  levelMax = 3;
  level = 3;

  tags: any[];
  selectedTags = ['인사', '희망', '감사'];
  tagOpened = true;

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {
    this.msgControl = this.fb.control('');

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
    let targetTags = [...this.selectedTags];
    let targetMsgs = [];
    let targetLength = targetTags.length;
    const msgs = [];

    // console.log('getMessage', this.level, targetTags);
    while (targetTags.length) {
      targetMsgs = this.messages.filter(msg => {
        return msg.tags.length === targetLength;
      });

      // console.log('target', targetTags, targetMsgs, targetLength);
      if (targetMsgs.length === 0) {
        targetLength -= 1;
        continue;
      }

      const tempMessages = [];
      targetMsgs.forEach(msg => {
        const tags = this.sort(msg.tags).join(',');
        if (tags === this.sort(targetTags).slice(0, targetLength).join(',')) {
          tempMessages.push(msg.texts[this.level]);
        }
      });

      if (tempMessages.length) {
        msgs.push(tempMessages[Math.floor(Math.random() * tempMessages.length)]);
      }

      targetTags = targetTags.slice(targetLength);
      targetLength = targetTags.length;

      // console.log(tempMessages, targetTags);
      // console.log(msgs);
    }

    this.msgControl.setValue(msgs.join(' '));
  }

  sort(array) {
    return [...array.sort((a, b) => a > b ? -1 : 1)];
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

  // 텍스트를 클립보드에 복사한다.
  copyMessage(textareaElement: HTMLTextAreaElement, button: HTMLButtonElement) {
    textareaElement.select();
    document.execCommand('copy');
    button.focus();

    this.copied$.next(true);

    of(null).pipe(
      delay(1500),
    ).subscribe(() => this.copied$.next(false));
  }

  // 공유하기 다이어로그를 연다.
  openShareDialog() {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      width: '240px',
      data: this.msgControl.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
