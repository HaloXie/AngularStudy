import { Injectable } from '@angular/core';
import { HeroModel } from '../models/hero-model';
import { HEROES } from '../mock-services/mock-heroes.service';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): HeroModel[] {
    return HEROES;
  }

  getObservableHeroes(): Observable<HeroModel[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
