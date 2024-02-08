import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  @ViewChild('formulario') aviaoForm: NgForm | undefined;

  onSubmit()
  {
    if(this.aviaoForm)
    {
      let {id, modelo, capacidade, empresa} = this.aviaoForm.value;
      console.log(id, modelo, capacidade, empresa);    
    }
  }
}
