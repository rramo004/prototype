import { Component } from '@angular/core';
import { NoinputComponent } from './components/noinput/noinput.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prototype';
  input: NoinputComponent = new NoinputComponent();
  
}
