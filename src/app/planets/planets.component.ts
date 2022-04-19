import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Planet} from '../planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planet: Planet | undefined;
  planetDetails: any = {};
  isSelected: string = '';
  showGeologyImage: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private planetService: PlanetsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
      //console.log(params);
      let planetName = params.get('name');
      this.getPlanet(planetName);
      
    });
  }


  getPlanet(planetName: any){
    this.planetService.getPlanets().subscribe( (response) => {
      this.planet = response.filter( planet => { return planet.name.toLowerCase() == planetName.toLowerCase() })[0];
      if(this.planet) {
        this.showDetails('overview')
      }
      })
  }

  showDetails(details: string) {
    
    if(details === 'overview'){
      this.isSelected =  'overview';
      this.planetDetails.details = this.planet?.overview;
      this.planetDetails.image = this.planet?.images.planet;
    } else if (details === 'structure') {
      this.planetDetails.details = this.planet?.structure;
      this.planetDetails.image = this.planet?.images.internal;
      this.isSelected = 'structure';
    } else {
      this.planetDetails.details = this.planet?.geology;
      this.planetDetails.image = this.planet?.images.planet;
      this.isSelected = 'geology';
    }

  }

}
