import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(public location: Location) {
  }

  ngOnInit(): void {
  }

  isOpen() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '/article'){
      titlee = titlee.slice(5);
    }
    if( titlee === '/article/article1' || titlee === '/article/article2') {
      return true;
    }
    else {
      return false;
    }
  }
}