import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {FormBuilder, FormArray, FormGroup} from '@angular/forms';

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

  tagOpened = true;

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    const id = 'happy-new-year';
    console.log(id);
    this.tags$ = this.db.list(`/subjects`).valueChanges().pipe(
      map(list => list.find(item => item['id'] === id)),
      pluck('tags'),
      tap(tags => this.tags = tags)
    );
    this.messages$ = this.db.list(`/messages/${id}`).valueChanges();

    this.tags$.subscribe(
      tags => {
        const newTags = [];
        tags.forEach(tag => {
          newTags.push({name: tag, checked: true});
        });

        this.initForm(newTags);
      }
    );
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

}
