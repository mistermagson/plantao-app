import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuizesService {

  private static juizes: Array<any> =  [
    { id: 12, nome: "Dr. Nice" , dataAntiguidade:'2021-01-01'},
    { id: 13, nome: 'Dr. Bombasto', dataAntiguidade:'2020-01-01'},
    { id: 14, nome: 'Dr. Celeritas' , dataAntiguidade:'2019-01-01'},
    { id: 15, nome: 'Dr. Magneta' , dataAntiguidade:'2018-01-01'},
    { id: 16, nome: 'Dr. RubberMan' , dataAntiguidade:'2017-01-01'},
    { id: 17, nome: 'Dr. Dynama', dataAntiguidade:'2016-01-01'},
    { id: 18, nome: 'Dr. IQ' , dataAntiguidade:'2015-02-01'},
    { id: 19, nome: 'Dr. Magma' , dataAntiguidade:'2015-01-01'},
    { id: 20, nome: 'Dr. Tornado', dataAntiguidade:'2015-03-01'}
  ]

  constructor() { }

  static getAll() {
    return this.juizes;
  }
}
