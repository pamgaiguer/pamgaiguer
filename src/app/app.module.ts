import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app.routing'

import { AppComponent } from './app.component'
import { NavbarComponent } from './shared/navbar/navbar.component'
import { FooterComponent } from './shared/footer/footer.component'
import { PagesModule } from './pages/pages.module'

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, RouterModule, PagesModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
