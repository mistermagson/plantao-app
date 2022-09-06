import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {JuizesComponent} from "./juizes/juizes.component";
import {PortariasComponent} from "./portarias/portarias.component";
import {PlantoesComponent} from "./plantoes/plantoes.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/auth.guard";


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'juizes', component: JuizesComponent, canActivate: [AuthGuard]},
  {
    path: 'portarias',
    component: PortariasComponent, canActivate: [AuthGuard]
  },
  {
    path: 'plantoes',
    component: PlantoesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
