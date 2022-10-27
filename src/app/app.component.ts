import { Component } from '@angular/core';
import { Aluno } from './aluno/aluno.models';

@Component({
  selector: 'escola-root', //onde vou injetar esse componente
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    alunos: Aluno[] =[ {nome:'Yuri', nota: 8, aprovado: true},
                       {nome:'João', nota: 10, aprovado: true},
                       {nome:'Carlos da Gama', nota: 1, aprovado: false}
                     ]
  }



