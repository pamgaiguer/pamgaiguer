import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';

import { PagesModule } from './pages/pages.module';
import { Article1Component } from './publications/article1/article1.component';
import { Article2Component } from './publications/article2/article2.component';
import { Note1Component } from './publications/note1/note1.component';
import { Note2Component } from './publications/note2/note2.component';
import { Note3Component } from './publications/note3/note3.component';
import { Note4Component } from './publications/note4/note4.component';

import * as $ from "jquery";
import { Note5Component } from './publications/note5/note5.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Article1Component,
    Article2Component,
    Note1Component,
    Note2Component,
    Note3Component,
    Note4Component,
    Note5Component,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
