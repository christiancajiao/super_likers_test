import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../hero.service';


type Hero = {
  id: string,
  name: string
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})


export class HomePageComponent implements OnInit {


   heroName:string = ""
   result: Hero[] = []

  constructor(private heroService : HeroService) { }
  fecthCharacter() {
      this.heroService.getCharacter(this.heroName).subscribe((data: any )=> {
      this.result = data.data.results;
     })
   console.log(this.result)
  }
  saveCharacter() {
    localStorage.setItem("myCharacters", "saved")
    console.log("saved")
  }
  ngOnInit(): void {
  
  }


}
