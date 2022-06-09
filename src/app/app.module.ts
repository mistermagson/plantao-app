import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntiguidadeComponent } from './antiguidade/antiguidade.component';
import { JuizesComponent } from './juizes/juizes.component';

@NgModule({
  declarations: [
    AppComponent,
    AntiguidadeComponent,
    JuizesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
