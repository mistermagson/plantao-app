import { Component, OnInit } from '@angular/core';

import {JuizesService} from "./juizes.service";


@Component({
  selector: 'app-juizes',
  templateUrl: './juizes.component.html',
  styleUrls: ['./juizes.component.sass']
})
export class JuizesComponent implements OnInit {

  juizes: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.juizes = JuizesService.getAll()
  }

}
