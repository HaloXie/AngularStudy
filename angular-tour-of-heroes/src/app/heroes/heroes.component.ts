import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../models/hero-model';
import { HEROES } from '../mock-services/mock-heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() {}

  hero: HeroModel = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;
  selectedHero: HeroModel;

  ngOnInit() {}

  onSelect(hero: HeroModel): void {
    this.selectedHero = hero;
  }
}
