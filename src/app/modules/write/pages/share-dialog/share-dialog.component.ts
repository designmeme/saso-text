import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit {
  snsList = [
    {label: '카카오톡', name: 'kakaotalk'},
    {label: '페이스북', name: 'facebook'},
    {label: '라인', name: 'line'},
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) private message: string,
  ) { }

  ngOnInit() {
  }

}
