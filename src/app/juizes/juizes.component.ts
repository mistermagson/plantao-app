import { Component, OnInit } from '@angular/core';

import {JuizesService} from "./juizes.service";
import {Observable} from "rxjs";
import {Juiz} from "../model/juiz";

@Component({
  selector: 'app-juizes',
  templateUrl: './juizes.component.html',
  styleUrls: ['./juizes.component.sass']
})
export class JuizesComponent implements OnInit {

  juizes: Observable<Juiz[]>;
  displayedColumns = ['id', 'nome','dataAntiguidade'];

  constructor(private juizesService: JuizesService) {
    this.juizes = juizesService.lista();
  }

  ngOnInit(): void {

  }
}
