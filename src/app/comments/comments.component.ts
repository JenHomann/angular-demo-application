import { Component, OnInit } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {
  comments = [];
  comment = new CommentComponent();

  constructor() {
  }

  ngOnInit() {
  }
  createComment(form) {
    const comment = new CommentComponent();
    comment.text = form.elements['comment-text'].value;
    comment.username = form.elements['comment-username'].value;
    if (comment.mockAjaxCall()) {
      return comment;
    }
  }
  postComment() {
    const form = (<HTMLInputElement>event.target).form;
    this.comments.push(this.createComment(form));
    form.reset();
  }
}
