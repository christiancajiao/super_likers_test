import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from "../../../hero.service"

@Component({
  selector: 'app-save-heroes',
  templateUrl: './save-heroes.component.html',
  styleUrls: ['./save-heroes.component.sass']
})
export class SaveHeroesComponent implements OnInit {

  savedHeros: Hero[] = []

  constructor(public heroService : HeroService) {
   }

  ngOnInit(): void {
    this.getSavedCharacters()
  }

  removeCharacter(id: string) {
    this.heroService.removeSavedCharacter(id)
  }
  addCharacter(hero: Hero) {
    this.heroService.addPinnedCharacters(hero)
    }
  getSavedCharacters() {
    this.savedHeros = this.heroService.getSavedCharacters()
  }
}
