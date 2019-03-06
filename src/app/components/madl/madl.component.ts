import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-madl',
  templateUrl: './madl.component.html',
  styleUrls: ['./madl.component.css']
})
export class MadlComponent implements OnInit {
  rows: {};
  results: any;
  selected: string;
  links: any[];

  constructor(private jsonService: JsonService) {
    this.rows = { };
    this.links = [];
  }

  ngOnInit() {
    this.jsonService.getJSON('http://localhost:4200/assets/madl.json')
    .then (result  => {
      this.rows = result;
      this.links = this.rows["LinkArray"];    
    });
  }

  onSubmit() {
    // alert("Thanks for submitting! Data: ");
    console.log("Thanks for submitting! Data: ");
  }
}



