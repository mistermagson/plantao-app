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
import {SecureModule} from "./secure/secure.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AntiguidadeComponent,
    JuizesComponent,
    PortariasComponent,
    PlantoesComponent


  ],
  imports: [
    //BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PublicModule,
    SecureModule,
    RouterModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
