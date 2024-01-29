import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent{
  @Input() valor: any[] = [];
  @Output() eventoEnviar: EventEmitter<string> = new EventEmitter<string>;

  enviarClasse(classe: string){
    console.log(classe)

    this.eventoEnviar.emit(classe);
  }
}