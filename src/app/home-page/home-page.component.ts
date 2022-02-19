import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

   heroName:string = ""

  constructor(private heroService : HeroService) { }
  fecthCharacter() {
    this.heroService.getCharacter()

  }
  ngOnInit(): void {
  this.heroService.getCharacter().subscribe((data: any )=> {
    this.heroName = data.data.results[0].name
   })
  }


}
