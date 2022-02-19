import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  /** PRUBLIC KEY 6184f39aed6cc186878c4b6c4e92fa4c*/
    /** PRVATE KEY fd5213461349bc71e27301b9cbc299e4ef85368d */
    /** 1fd5213461349bc71e27301b9cbc299e4ef85368d6184f39aed6cc186878c4b6c4e92fa4c */
    /** hash 5e313fc1ae223d077d312fe917a7a6d4 */


   private url:string = "https://gateway.marvel.com/v1/public/characters/1009144?ts=1&apikey=6184f39aed6cc186878c4b6c4e92fa4c&hash=5e313fc1ae223d077d312fe917a7a6d4"
  constructor(private http : HttpClient) { }

  getCharacter() {
    return this.http.get(`${this.url}`)
  }
}
