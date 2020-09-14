import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTablesModule } from 'angular-datatables';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieLawModule } from 'angular2-cookie-law';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import { HomeComponent } from './home/home.component';
import * as $ from "jquery";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        PdfViewerModule,
        DataTablesModule,
        BrowserAnimationsModule,
        CookieLawModule,
        NgxTwitterTimelineModule
    ],
    declarations: [
        HomeComponent,
    ]
})
export class PagesModule { }
