import { Component, OnInit } from '@angular/core';
import { curitiba } from './curitiba_glossario'

@Component({
  selector: 'app-curitiba',
  templateUrl: './curitiba.component.html',
  styleUrls: ['./curitiba.component.scss']
})
export class CuritibaComponent implements OnInit {

  curitiba_rodape = curitiba;

  constructor() { }

  ngOnInit(): void {
  }
}
