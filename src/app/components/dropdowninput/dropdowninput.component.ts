import {Input} from '@angular/core';
import { Component, OnInit, OnChanges} from '@angular/core';
import {AircraftType} from '../../common/enumerations'
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-dropdowninput',
  templateUrl: './dropdowninput.component.html',
  styleUrls: ['./dropdowninput.component.css']
})
export class DropdowninputComponent implements OnInit{
  @Input() key: any[];
  @Input() value: any[];
  @Input() enumType: string;
  array: string[];

  constructor() { 
    this.array = [];
  }

  ngOnInit() {
    
    switch(this.enumType) {
      case 'AircraftType': 
        this.array = Object.keys(AircraftType).map(key => AircraftType[key]);
    }
    
  }



}
