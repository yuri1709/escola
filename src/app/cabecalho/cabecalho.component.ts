import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'escola-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Hunter';

}
