import { Component, OnInit } from '@angular/core';
import { aboutus } from './aboutus'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  allaboutus = aboutus;

  constructor() { }

  ngOnInit(): void {
  }

}
