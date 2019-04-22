import { Component, OnInit, Input } from '@angular/core';
import { HeroModel } from '../models/hero-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: HeroModel;
  constructor() {}

  ngOnInit() {}
}