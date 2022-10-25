import { Component } from '@angular/core';

@Component({
  selector: 'escola-root', //onde vou injetar esse componente
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Escola Hunter';
  name = 'Yuri';
  nota = 7;
  situacao = 'Aprovado';
}
