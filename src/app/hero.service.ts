import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  apiKey:string = "6184f39aed6cc186878c4b6c4e92fa4c"
    /** PRVATE KEY fd5213461349bc71e27301b9cbc299e4ef85368d */
    /** 1fd5213461349bc71e27301b9cbc299e4ef85368d6184f39aed6cc186878c4b6c4e92fa4c */
  hash:string = "5e313fc1ae223d077d312fe917a7a6d4" 


   private url:string = "https://gateway.marvel.com/v1/public/characters"
  constructor(private http : HttpClient) { }

  getCharacter(name: string) {
    return this.http.get(`${this.url}?nameStartsWith=${name}&ts=1&apikey=${this.apiKey}&hash=${this.hash}`)
  }
}
