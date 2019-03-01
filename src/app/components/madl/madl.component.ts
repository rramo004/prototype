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

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.getJSON('http://localhost:4200/assets/madl.json')
    .then (result  => {
    this.rows = result;
    console.log(this.rows);
    });
  }

  onSubmit() {
    alert("Thanks for submitting! Data: ");
  }
}



