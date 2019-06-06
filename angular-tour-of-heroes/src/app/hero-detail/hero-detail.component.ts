import { Component, OnInit, Input } from '@angular/core';
import { HeroModel } from '../models/hero-model';

// get routin
/*
  The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent.
  This component is interested in the route's bag of parameters extracted from the URL.
  The "id" parameter is the id of the hero to display.
*/
import { ActivatedRoute } from '@angular/router';
// The location is an Angular service for interacting with the browser.
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: HeroModel;
  // DI
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    /*
      The route.snapshot is a static image of the route information shortly after the component was created.
      The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
      Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
    */
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getObservableHero(id)
      .subscribe(x => this.hero = x);
  }

  goBack(): void {
    this.location.back();
  }
}
