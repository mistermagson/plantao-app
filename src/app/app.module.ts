import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuizesComponent } from './juizes/juizes.component';
import { PortariasComponent } from './portarias/portarias.component';
import { PlantoesComponent } from './plantoes/plantoes.component';
import { RouterModule } from "@angular/router";
import { NavComponent } from "./nav/nav.component";
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./services/auth.service";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from "@angular/material/icon";
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import {AuthGuard} from "./services/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    JuizesComponent,
    PortariasComponent,
    PlantoesComponent,
    NavComponent,
    HeaderComponent,
    LoginComponent,

  ],
  imports: [
    //BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule

  ],
  exports: [AppComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})


export class AppModule { }
