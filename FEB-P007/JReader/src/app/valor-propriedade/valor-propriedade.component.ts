import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrl: './valor-propriedade.component.css'
})
export class ValorPropriedadeComponent {
  @Input() valor: string = '';

  checkValor(){
    if(this.valor == "")
      return false;

    return true;
  }
}
