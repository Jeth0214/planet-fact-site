import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Planet } from '../planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planet: Planet | undefined;

  constructor( private activatedRoute: ActivatedRoute, private planetService: PlanetsService ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
      let planetName = params.get('name');
      //console.log(name);
      this.getPlanet(planetName);
    })
  }

  getPlanet(planetName: any){
    this.planetService.getPlanets().subscribe( (response) => {
      this.planet = response.filter( planet => { return planet.name.toLowerCase() == planetName.toLowerCase() })[0];
    })
  }

}
