import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../public/public.component.scss']
})
export class LoginComponent implements OnInit {


  usuario: User = new User();

  constructor(private autentica: AuthService) {

  }

  ngOnInit(): void {
     }

  login():void{
    this.autentica.login(this.usuario);
  }

}

