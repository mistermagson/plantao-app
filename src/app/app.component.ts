import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'plantao-app';
  today = Date();

  toggleMenu(){
    let nav = document.getElementById('nav');
    // @ts-ignore
    nav.classList.toggle('active');
  }
}
