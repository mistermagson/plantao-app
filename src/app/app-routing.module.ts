import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AntiguidadeComponent} from "./antiguidade/antiguidade.component";
import {JuizesComponent} from "./juizes/juizes.component";

const routes: Routes = [
  {
    path: 'antiguidade',
    component: AntiguidadeComponent
  },
  {
    path: 'juizes',
    component: JuizesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
