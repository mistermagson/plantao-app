import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass', '../public.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  http: HttpClient;

  constructor(private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password:''
    })
  }

  submit():void{

    console.log(this.form.getRawValue())

  }

}

