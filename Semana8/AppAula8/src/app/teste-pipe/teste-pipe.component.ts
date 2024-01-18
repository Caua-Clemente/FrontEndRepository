import { Component } from '@angular/core';
import { CountryApiService } from '../country-api.service';

@Component({
  selector: 'app-teste-pipe',
  templateUrl: './teste-pipe.component.html',
  styleUrl: './teste-pipe.component.css'
})
export class TestePipeComponent {
  link = "";
  listaPaises = [{name: {official: "placeholder"}, population: "0"}];

  constructor(private countryService: CountryApiService) { };

  ngOnInit(): void{
    this.usePaises();
  }

  async usePaises(): Promise<void> {
    this.countryService.getPaises()
    .then((paises) => {
      this.listaPaises = paises;
    })
    .catch((error) => {
      console.error(error);
    });

  }
}