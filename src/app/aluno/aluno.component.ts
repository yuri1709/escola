import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from './aluno.models';

@Component({
  selector: 'escola-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  
 @Input() aluno!: Aluno; //é operador de inicialização, cara isso é muito bom! pq não preciso passar valores pra variável ser inicializada.
  title = 'Escola Hunter';
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
