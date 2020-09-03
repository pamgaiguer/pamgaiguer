import { Component, OnInit, NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-howtouse',
  templateUrl: './howtouse.component.html',
  styleUrls: ['./howtouse.component.scss']
})
export class HowtouseComponent implements OnInit {
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
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
    console.log("next page");
  }

  prevPage() {
    this.page--;
    console.log("previous page");
  }

  ngOnInit(): void {
  }

}
