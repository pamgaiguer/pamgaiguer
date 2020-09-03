import { Component, OnInit } from '@angular/core';
import { dados_ipc } from './dados_ipc'
import * as $ from 'jquery';  

@Component({
  selector: 'app-home',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})

export class DashComponent implements OnInit {
  
  dados_ipc = dados_ipc;
  
  constructor() { }
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      processing: true,
      responsive: true,
      language: {
        processing: "Processando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ dados",
        info: "Mostrando desde _START_ até _END_ de _TOTAL_ dados",
        infoEmpty: "Mostrando nenhum dado.",
        infoFiltered: "(filtrado _MAX_ dados total)",
        infoPostFix: "",
        loadingRecords: "Carregando...",
        zeroRecords: "Não existem registros.",
        emptyTable: "Não há dados para essa tabela.",
        paginate: {
          first: "Primeiro",
          previous: "Anterior",
          next: "Seguinte",
          last: "Último"
        },
        aria: {
          sortAscending: ": Ative para classificar a tabela em ordem crescente",
          sortDescending: ": Ative para classificar a tabela em ordem decrescente"
        }
      }
    }
  }
}
