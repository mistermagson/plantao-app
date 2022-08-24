import { Component, OnInit, ChangeDetectionStrategy,  ViewEncapsulation } from '@angular/core';
import { PLANTOES } from "../mock-plantoes";

@Component({
  selector: 'app-plantoes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './plantoes.component.html',
  styleUrls: ['./plantoes.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class PlantoesComponent implements OnInit {

  plantoes = PLANTOES;


  constructor() {

  }

  ngOnInit(): void {
  }
}
