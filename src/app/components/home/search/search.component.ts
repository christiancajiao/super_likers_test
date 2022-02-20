import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../hero.service';

type Thumbnail =  {
  path: string,
  extension: string,
}


type Hero = {
  id: string,
  name: string, 
  thumbnail: Thumbnail,
  description: string
} 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  

  heroName:string = ""
  result: Hero[] = []

 constructor(private heroService : HeroService) { 
 }
 fecthCharacter() {
     this.heroService.getCharacter(this.heroName).subscribe((data: any )=> {
     this.result = data.data.results; 
    })
  console.log(this.result)
 }
 saveCharacter(hero: any) {
   this.heroService.saveCharacter(hero)
   
 }
  ngOnInit(): void {
 
 }



}
