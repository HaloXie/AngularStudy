import { Injectable } from '@angular/core';
import { HeroModel } from '../models/hero-model';
import { HEROES } from '../mock-services/mock-heroes.service';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

// Http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// Handle
import { HandleErrorService } from '../Handles/handleError.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private handleErrorService: HandleErrorService,
    private messageService: MessageService
  ) {}

  getHeroes(): HeroModel[] {
    return HEROES;
  }

  //Sync
  getObservableHeroes(): Observable<HeroModel[]> {
    this.messageService.add('HeroService: fetched getObservableHeroes');
    return of(HEROES);
  }

  //Sync
  getObservableHero(id: number): Observable<HeroModel> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(x => x.id === id));
  }

  // Http

  private heroesUrl = 'api/heroes'; // URL to web api

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** GET heroes from the server */
  // HttpClient.get returns the body of the response as an untyped JSON object by default. Applying the optional type specifier, <HeroModel[]> , gives you a typed result object.
  getHttpHeroes(): Observable<HeroModel[]> {
    return this.http.get<HeroModel[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(
        this.handleErrorService.handleError<HeroModel[]>(
          this.log,
          'getHeroes',
          []
        )
      )
    );
  }
}
