import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'plantao-app';

  toggleMenu(){
    let hamburguer = document.getElementById('nav');
    hamburguer.classList.toggle('active');
  }



}
