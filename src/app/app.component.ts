import { Component, OnInit, Inject, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { DOCUMENT } from '@angular/common'
import { LocationStrategy, PlatformLocation, Location } from '@angular/common'
import { NavbarComponent } from './shared/navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NavbarComponent) navbar: NavbarComponent

  constructor(
    private router: Router,
    @Inject(DOCUMENT)
    public location: Location
  ) {}

  ngOnInit() {
    var ua = window.navigator.userAgent
    var trident = ua.indexOf('Trident/')
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:')
      var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
    }
    if (version) {
      var body = document.getElementsByTagName('body')[0]
      body.classList.add('ie-background')
    }
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path())
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1)
    }
    if (titlee === '/home') {
      return true
    } else {
      return false
    }
  }
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path())
    titlee = titlee.slice(1)
    if (titlee === 'signup' || titlee === 'nucleoicons') {
      return false
    } else {
      return true
    }
  }
}
