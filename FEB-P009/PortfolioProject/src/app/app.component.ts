import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioProject';

  rota: string = '';
  constructor(private rotas: Router, private rotaAtiva: ActivatedRoute){
    
  }

  paraUesc() {
    this.rotas.navigate(['uescPage']);
  }

  paraJreader() {
    this.rotas.navigate(['jreaderPage']);
  }

  paraWikipedia() {
    this.rotas.navigate(['wikipediaPage']);
  }

  fechar() {
    this.rotas.navigate(['']);
  }
}
