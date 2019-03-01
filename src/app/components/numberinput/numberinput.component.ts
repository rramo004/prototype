import {Input} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numberinput',
  templateUrl: './numberinput.component.html',
  styleUrls: ['./numberinput.component.css']
})
export class NumberinputComponent implements OnInit {
  @Input() key: any[];
  @Input() value: any[];
  @Input() numInput: number;
  
  constructor() { }

  ngOnInit() {
  }

}
