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

import { DashComponent } from './dash/dash.component';
import { HowtouseComponent } from './howtouse/howtouse.component';
import { HowtouseSchoolsComponent } from './howtouse_schools/howtouse_schools.component';
import { ArticleComponent } from './article/article.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotesComponent } from './notes/notes.component';
import { PublicityComponent } from './publicity/publicity.component';
import { PublicationsComponent } from './publications/publications.component';
import { HomeComponent } from './home/home.component';
import { CopacabanaComponent } from './case-study/copacabana/copacabana.component';
import { FortalezaComponent } from './case-study/fortaleza/fortaleza.component';
import { HowToActComponent } from './how-to-act/how-to-act.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PartnersComponent } from './partners/partners.component';
import { MethodologyComponent } from './methodology/methodology.component';
import * as $ from "jquery";
import { SaopauloComponent } from './case-study/saopaulo/saopaulo.component';
import { CuritibaComponent } from './case-study/curitiba/curitiba.component';
import { SchoolsComponent } from './schools/schools.component';


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
        DashComponent,
        HowtouseComponent,
        HowtouseSchoolsComponent,
        ArticleComponent,
        AboutusComponent,
        NotesComponent,
        PublicityComponent,
        PublicationsComponent,
        HomeComponent,
        CopacabanaComponent,
        FortalezaComponent,
        HowToActComponent,
        StatisticsComponent,
        PartnersComponent,
        MethodologyComponent,
        SaopauloComponent,
        CuritibaComponent,
        SchoolsComponent,
    ]
})
export class PagesModule { }
