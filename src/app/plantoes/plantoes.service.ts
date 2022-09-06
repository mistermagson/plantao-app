import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plantao} from "../model/plantao";

@Injectable({
  providedIn: 'root'
})
export class PlantoesService {

  private readonly API = '/assets/plantoes.json';

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get<Plantao[]>(this.API);
  }
}
