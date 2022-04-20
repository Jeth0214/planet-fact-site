import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [ 
  { path:'' , redirectTo: 'planet/Mercury', pathMatch: 'full'},
  { path:'planet/:name' , component: PlanetsComponent},
  { path:'PlanetNotFound' , component: PageNotFoundComponent},
  { path:'**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
