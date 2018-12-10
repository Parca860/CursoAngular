import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

// Servicios
import { HeroesService } from '../services/heroes.services';

// Models
import { HeroeModel } from '../models/heroe.models';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {


  heroes: HeroeModel[] = [];

  constructor( private _heroesService: HeroesService, private _router: Router  ) { }

  ngOnInit() {

  this.obtenerHeroes();

  }


  public obtenerHeroes() {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }


  btnVermas(i: number) {

   this._router.navigate( ['/heroe', i]);

  }



}
