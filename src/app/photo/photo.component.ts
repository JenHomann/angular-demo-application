import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  unsplashImageRef = Math.floor(Math.random() * 100) + 1;
  thumbSrc = 'https://unsplash.it/200/150?image=' + this.unsplashImageRef;
  fullSrc = 'https://unsplash.it/500/500?image=' + this.unsplashImageRef;

  constructor() {
  }

  ngOnInit() {
  }
}
