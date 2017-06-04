import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments = [];
  comment = new Comment();

  constructor() {
    this.comments.push(new Comment());
    this.comments.push(new Comment());
  }

  ngOnInit() {
  }

}
