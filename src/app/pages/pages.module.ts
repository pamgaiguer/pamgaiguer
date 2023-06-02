import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeComponent } from './home/home.component'

@NgModule({
  imports: [CommonModule, RouterModule, BrowserAnimationsModule],
  declarations: [HomeComponent],
})
export class PagesModule {}
