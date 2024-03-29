import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Juiz} from "../model/juiz";


@Injectable({
  providedIn: 'root'
})
export class JuizesService {

  private readonly API = '/assets/juizes.json';

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get<Juiz[]>(this.API);
  }
}
