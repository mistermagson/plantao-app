import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntiguidadeComponent } from './antiguidade/antiguidade.component';
import { JuizesComponent } from './juizes/juizes.component';
import { PortariasComponent } from './portarias/portarias.component';
import { PlantoesComponent } from './plantoes/plantoes.component';
import {PublicModule} from "./public/public.module";
import {RouterModule} from "@angular/router";
import {NavComponent} from "./nav/nav.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AntiguidadeComponent,
    JuizesComponent,
    PortariasComponent,
    PlantoesComponent,
    NavComponent,
    HeaderComponent



  ],
  imports: [
    //BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PublicModule,

    RouterModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
