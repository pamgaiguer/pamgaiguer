import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  
  constructor(public location: Location) {
  }
  
  ngOnInit(): void {
  }
  isOpen() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '/notes'){
      titlee = titlee.slice(5);
    }
    if( titlee === '/notes/note1' || titlee === '/notes/note2') {
      return true;
    }
    else {
      return false;
    }
  }
}
