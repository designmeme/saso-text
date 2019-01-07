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

  tags$: Observable<any>;
  tags: any[];
  messages$: Observable<any>;
  tagForm: FormGroup;

  levelControl: FormControl;
  levelMax = 3;
  level = 2;

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
    console.log(id);
    this.db.list<any>(`/subjects`).valueChanges().pipe(
      map(list => list.find(item => item['id'] === id)),
    ).subscribe(
      data => {
        console.log(data);

        // 높임말 관련 설정
        this.levelMax = data.levels - 1;


        // this.tags = data.tags;

        // const newTags = [];
        // data.tags.forEach(tag => {
        //   newTags.push({name: tag, checked: true});
        // });
        //
        // this.tags = tags;
        //
        // this.initForm(newTags);
      }
    );

    this.messages$ = this.db.list(`/messages/${id}`).valueChanges();

    this.messages$.subscribe(
      list => {
        console.log(list);
      }
    );


  }

  initForm(tags) {
    const tagControls = {};
    tags.forEach(tag => {
      tagControls[tag.name] = tag.checked;
    });
    this.tagForm = this.fb.group(tagControls);

    this.tagForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  // 설정에 맞는 메세지를 가져온다.
  getMesssage() {
    console.log('getMessage', this.level);
  }

}
