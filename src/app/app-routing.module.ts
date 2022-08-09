import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AntiguidadeComponent} from "./antiguidade/antiguidade.component";
import {JuizesComponent} from "./juizes/juizes.component";
import {PortariasComponent} from "./portarias/portarias.component";
import {PlantoesComponent} from "./plantoes/plantoes.component";
import {LoginComponent} from "./public/login/login.component";
import {SecureComponent} from "./secure/secure.component";
import {PublicModule} from "./public/public.module";
import {PublicComponent} from "./public/public.component";

const routes: Routes = [
  { path:'', component:SecureComponent},
  {
    path: '',
    component: PublicComponent,
    children:[
      {path: 'login', component:LoginComponent}
    ]
  },
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
