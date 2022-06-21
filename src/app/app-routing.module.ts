import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AntiguidadeComponent} from "./antiguidade/antiguidade.component";
import {JuizesComponent} from "./juizes/juizes.component";
import {PortariasComponent} from "./portarias/portarias.component";
import {PlantoesComponent} from "./plantoes/plantoes.component";

const routes: Routes = [
  {
    path: 'antiguidade',
    component: AntiguidadeComponent
  },
  {
    path: 'juizes',
    component: JuizesComponent
  },
  {
    path: 'portarias',
    component: PortariasComponent
  },
  {
    path: 'plantoes',
    component: PlantoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
