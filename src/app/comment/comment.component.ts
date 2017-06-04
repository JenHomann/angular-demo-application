import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  text = '';
  date = new Date().toUTCString();
  username = '';

  constructor() {
  }

  ngOnInit() {
  }

}
