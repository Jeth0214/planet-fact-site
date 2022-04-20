import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Planet Fact Site';
  planets: Planet[] = [];

  constructor (private planetService: PlanetsService ) {

  }

  ngOnInit(){
    this.planetService.getPlanets().subscribe( response => {
      this.planets = response;
    })
  }
}
