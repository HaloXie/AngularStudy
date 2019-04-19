import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../models/hero-model';

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

  ngOnInit() {}
}
