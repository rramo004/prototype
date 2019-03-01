import {Input} from '@angular/core';
import { Component, OnInit, OnChanges} from '@angular/core';
import {AircraftType} from '../../common/enumerations'

@Component({
  selector: 'app-dropdowninput',
  templateUrl: './dropdowninput.component.html',
  styleUrls: ['./dropdowninput.component.css']
})
export class DropdowninputComponent implements OnInit{
  @Input() key: any[];
  @Input() value: any[];
  aircraftType: string[];
  selected: string;
  shadow: string;

  constructor() { 
  }

  ngOnInit() {
    this.aircraftType = Object.keys(AircraftType).map(key => AircraftType[key]);
  }



}
