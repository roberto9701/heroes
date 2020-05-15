import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  // ¿que tengo que hacer para usar el servicio aca?
  // -declarar una propiedad private en el constructor del tipo del servicio


  constructor( private _heroesService: HeroesService) { }

  ngOnInit(): void {
  }

}
