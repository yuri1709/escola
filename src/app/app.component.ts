import { Component } from '@angular/core';
import { Aluno } from './aluno/aluno.models';

@Component({
  selector: 'escola-root', //onde vou injetar esse componente
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aluno1: Aluno[] =[ {nome:'Yuri', nota: 8, situacao: 'Aprovado', aprovado: true}, {nome:'João', nota: 10, situacao: 'Aprovado', aprovado: true}];
  //aluno2: Aluno = {nome:'João', nota: 10, situacao: 'Aprovado', aprovado: true};

}

