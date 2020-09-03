import { Component, OnInit } from '@angular/core';
import { publicity } from './publicity'

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.scss']
})
export class PublicityComponent implements OnInit {

  allpublicity = publicity;

  constructor() { }

  ngOnInit(): void {
  }

}
