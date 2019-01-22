import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ICharacter } from '../shared/interfaces';
import { IMonster } from '../shared/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = './assets/';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>('./assets/character.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>('./assets/character.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  getMonsters(): Observable<IMonster> {
    return this.http.get<IMonster>('https://api-beta.open5e.com/monsters/').
      pipe(
        catchError(this.handleError)
      );

  }


  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      console.log("testtttt");
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    console.log("testtttt2");
    return Observable.throw(error || 'Node.js server error');
  }

}
