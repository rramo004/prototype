import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'noinput',
  templateUrl: './noinput.component.html',
  styleUrls: ['./noinput.component.css']
})
export class NoinputComponent implements OnInit {
  name: string;
  current: string | number;
  input: string;

  constructor() { }

  ngOnInit() {
    // this.name = 'string';
    // this.current = 'current';
    // this.input = '';
  }

  public setName(name: string) {
    this.name = name;
  }

  public setCurrent(current: string | number) {
    this.current = current;
  }

  public setInput(input: string) {
    this.input = input;
  }


}
