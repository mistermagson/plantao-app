import { Component, OnInit } from '@angular/core';
import { JUIZES } from "../mock-juizes";

@Component({
  selector: 'app-juizes',
  templateUrl: './juizes.component.html',
  styleUrls: ['./juizes.component.sass']
})
export class JuizesComponent implements OnInit {

  juizes = JUIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
