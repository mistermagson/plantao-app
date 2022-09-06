import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor( private router: Router) { }

  login(usuario: User) {
    if (usuario.nome === 'mmm' && usuario.senha==='666'){
      this.usuarioAutenticado = true;
      this.router.navigate(['/juizes']);
    }
  };

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
