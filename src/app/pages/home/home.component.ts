import { Component, OnInit } from '@angular/core'
import { portfolio } from './portfolio'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  portfolio = portfolio

  constructor() {}

  ngOnInit(): void {
    const global = null

    if (typeof global !== 'undefined') {
      // Code that uses the global object
    }
  }
}
