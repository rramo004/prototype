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

  constructor(private jsonService: JsonService) {
    this.rows = { };
  }

  ngOnInit() {
    this.jsonService.getJSON('http://localhost:4200/assets/madl.json')
    .then (result  => {
      this.rows = result;
    });
  }

  onSubmit() {
    // alert("Thanks for submitting! Data: ");
    console.log("Thanks for submitting! Data: ");
  }
}



