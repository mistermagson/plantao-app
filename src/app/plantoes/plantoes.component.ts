import { Component, OnInit, ChangeDetectionStrategy,  ViewEncapsulation } from '@angular/core';
import {PlantoesService} from "./plantoes.service";
import {Observable} from "rxjs";
import {Plantao} from "../model/plantao";


@Component({
  selector: 'app-plantoes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './plantoes.component.html',
  styleUrls: ['./plantoes.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class PlantoesComponent implements OnInit {

  plantoes: Observable<Plantao[]>;
  displayedColumns = ['id','juizId','dataPlantao','tipoPlantao']

  constructor(private plantoesService: PlantoesService) {
    this.plantoes = plantoesService.lista();
  }

  ngOnInit(): void {
  }
}
