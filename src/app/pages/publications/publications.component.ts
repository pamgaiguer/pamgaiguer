import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  
  constructor(public location: Location) {
  }
  
  
  ngOnInit(): void {
  }
  // isOpen() {
  //   var titlee = this.location.prepareExternalUrl(this.location.path());
  //   if(titlee.charAt(0) === '/publications'){
  //     titlee = titlee.slice(5);
  //   }
  //   if( titlee == '/publications/article1' || 
  //   titlee == '/publications/article2' || titlee == '/publications/note1' || titlee == '/publications/note2' || titlee == '/publications/note3'
  //   || titlee == '/publications/note4' ) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }
}
