import {Input} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-numberinput',
  templateUrl: './numberinput.component.html',
  styleUrls: ['./numberinput.component.css']
})
export class NumberinputComponent implements OnInit {
  @Input() key: any[];
  @Input() value: any[];
  
  form = new FormGroup(
    {
      inputNum: new FormControl ( '', 
        [
          Validators.required,
          Validators.min(0),
          Validators.max(10)
        ]
      )
    }
  );

  get inputNum() {
    return this.form.get('inputNum');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
