import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {
  @Input() key: any[];
  @Input() value: any[];
  
  form = new FormGroup(
    {
      inputText: new FormControl ( '', 
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(4),
          Validators.pattern('^[a-zA-Z]+$')
        ]
      )
    }
  );

  get inputText() {
    return this.form.get('inputText');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
