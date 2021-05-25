import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
// import axios from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  
})

export class HeroService {
  private heroesUrl = 'http://localhost:2021/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

getHero(_id: string): Observable<Hero> {
  const url = `${this.heroesUrl}/${_id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${_id}`)),
    catchError(this.handleError<Hero>(`getHero id=${_id}`))
  );
}

/** PUT: update the hero on the server */
updateHero(hero: Hero): Observable<any> {
  return this.http.put(`${this.heroesUrl}/${hero._id}`, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero._id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}
/** POST: add a new hero to the server */
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}
/** DELETE: delete the hero from the server */
deleteHero(_id: string): Observable<Hero> {
  const url = `${this.heroesUrl}/${_id}`;

  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${_id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
}

