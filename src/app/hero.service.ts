import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


type Thumbnail =  {
  path: string,
  extension: string,
}


export type Hero = {
  id: string,
  name: string, 
  thumbnail: Thumbnail,
  description: string
} 

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  savedCharacters: Array<Hero> = [];
  pinnedCharacters: Array<Hero> = [];



  apiKey:string = "6184f39aed6cc186878c4b6c4e92fa4c"
    /** PRVATE KEY fd5213461349bc71e27301b9cbc299e4ef85368d */
    /** 1fd5213461349bc71e27301b9cbc299e4ef85368d6184f39aed6cc186878c4b6c4e92fa4c */
  hash:string = "5e313fc1ae223d077d312fe917a7a6d4" 


   private url:string = "https://gateway.marvel.com/v1/public/characters"
  constructor(private http : HttpClient) { }

  getCharacter(name: string) {
    return this.http.get(`${this.url}?nameStartsWith=${name}&ts=1&apikey=${this.apiKey}&hash=${this.hash}`)
  }
  saveCharacter(hero: Hero) {
    this.savedCharacters.push(hero)
    console.log(hero)
  }
  getSavedCharacters() {
    return this.savedCharacters
  }
  removeSavedCharacter(id: string) {
    const updateCharacters = this.savedCharacters.filter(c => c.id !== id)

    this.savedCharacters = updateCharacters
  }
  addPinnedCharacters(hero : any) {
    this.pinnedCharacters.push(hero)
    localStorage.setItem("pinnedCharacters", JSON.stringify(this.pinnedCharacters))
   console.log(localStorage.getItem("pinnedCharacters")) 
  }
  getPinnedCharacters() {
    return this.pinnedCharacters
  }
}
