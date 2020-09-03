import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.scss']
})
export class Article1Component implements OnInit {
  src = "https://zecopol.github.io/zecopol/Artigo_SimulandoEvolucaoDaTransmissao.pdf";
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
    // console.log("next page");
  }

  prevPage() {
    this.page--;
    // console.log("previous page");
  }

  ngOnInit(): void {
  }
}
