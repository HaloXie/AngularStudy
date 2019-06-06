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

// InterFace
import { ILog } from '../InterFace/ILog';

class CustomLog implements ILog {
  constructor(private messageService: MessageService) {}
  Log(str: string): void {
    this.messageService.add(str);
  }
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private handleErrorService: HandleErrorService,
    private messageService: MessageService
  ) {
    this.customLog = new CustomLog(this.messageService);
  }

  // Http
  // URL to web api
  private heroesUrl = 'api/heroes';

  private customLog: CustomLog;

  getHeroes(): HeroModel[] {
    return HEROES;
  }

  // Sync
  getObservableHeroes(): Observable<HeroModel[]> {
    this.messageService.add('HeroService: fetched getObservableHeroes');
    return of(HEROES);
  }

  // Sync
  getObservableHero(id: number): Observable<HeroModel> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(x => x.id === id));
  }

  /** GET heroes from the server */
  getHttpHeroes(): Observable<HeroModel[]> {
    return (
      this.http
        .get<HeroModel[]>(this.heroesUrl)
        // Now extend the observable result with the .pipe() method and give it a catchError() operator.
        .pipe(
          tap(() => this.customLog.Log('fetched heroes')),
          catchError(
            this.handleErrorService.handleError<HeroModel[]>(
              this.customLog,
              'getHeroes',
              []
            )
          )
        )
    );
  }
}
