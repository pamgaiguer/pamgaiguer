import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note4',
  templateUrl: './note4.component.html',
  styleUrls: ['./note4.component.scss']
})
export class Note4Component implements OnInit {
  src = "./assets/articles/3105_NotaTecnica.pdf";
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  items;
  
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }
  
  nextPage() {
    this.page++;
  }
  
  prevPage() {
    this.page--;
  }
  
  ngOnInit(): void {
  }
}
