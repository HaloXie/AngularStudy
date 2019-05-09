import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../models/hero-model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {} // => DI

  hero: HeroModel = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: HeroModel[];
  selectedHero: HeroModel;

  ngOnInit() {
    this.getHeroes();
    this.getHttpHeroes();
  }

  onSelect(hero: HeroModel): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  getObservableHeroes(): void {
    this.heroes = new Array<HeroModel>();
    this.heroService.getObservableHeroes().subscribe(x => (this.heroes = x));
  }

  getHttpHeroes(): void {
    this.heroes = new Array<HeroModel>();
    this.heroService.getHttpHeroes().subscribe(x => (this.heroes = x));
  }
}
