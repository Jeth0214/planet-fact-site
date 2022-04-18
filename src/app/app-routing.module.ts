import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [ 
  { path:'' , redirectTo: '/planet/Mercury', pathMatch: 'full'},
  { path:'planet/:name' , component: PlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
