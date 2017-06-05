import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {
  @Input() text: string;
  @Input() username: string;
  datePosted = new Date().toUTCString();

  constructor() {
    this.datePosted = new Date().toUTCString();
  }

  ngOnInit() {
  }
  mockAjaxCall() {
    // $.post('demo-app.com/comment/new', {text: this.text, username: this.username, datePosted: this.datePosted});
    return true;
  }
}
