import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  // ¿que tengo que hacer para usar el servicio aca?
  // -declarar una propiedad private en el constructor del tipo del servicio

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router) {

  }

  // ngOnInit() se ejecuta cuando todo esta renderizado
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  // esta funcion se invoca con el boton (click) de cada tarjeta
  // redirige ala ruta
  verHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
  }

}
