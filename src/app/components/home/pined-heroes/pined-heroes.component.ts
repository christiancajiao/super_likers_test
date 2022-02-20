import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from "../../../hero.service"

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-pined-heroes',
  templateUrl: './pined-heroes.component.html',
  styleUrls: ['./pined-heroes.component.sass']
})
export class PinedHeroesComponent implements OnInit {

  pinnedCharacters: Hero[] = []

  constructor(public heroService : HeroService) { }

  ngOnInit(): void {
    this.getPinnedCharacters()
  }


  getPinnedCharacters() {
    this.pinnedCharacters = this.heroService.pinnedCharacters
  }
}
