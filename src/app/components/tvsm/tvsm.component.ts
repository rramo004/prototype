import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-tvsm',
  templateUrl: './tvsm.component.html',
  styleUrls: ['./tvsm.component.css']
})
export class TvsmComponent implements OnInit {
  rows: {};

  constructor(private jsonService: JsonService) {}

  ngOnInit() {
    this.jsonService.getJSON('http://localhost:4200/assets/tvsm.json')
      .then (result  => {
      this.rows = result;
    });
  }

}
