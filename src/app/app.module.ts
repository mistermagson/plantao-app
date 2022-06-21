import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntiguidadeComponent } from './antiguidade/antiguidade.component';
import { JuizesComponent } from './juizes/juizes.component';
import { PortariasComponent } from './portarias/portarias.component';
import { PlantoesComponent } from './plantoes/plantoes.component';
import {CalendarModule, DateAdapter} from "angular-calendar";
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
