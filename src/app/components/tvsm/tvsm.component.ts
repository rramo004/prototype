import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvsm',
  templateUrl: './tvsm.component.html',
  styleUrls: ['./tvsm.component.css']
})
export class TvsmComponent implements OnInit {

  rows: any[];
  constructor() { }

  ngOnInit() {
      this.rows = [
        ["Message Valid",  false],
        ["UTC Time Valid",  false],
        ["GPS Time Valid", true],
        ["CNI TFOM", 0],
        ["GPS UTC TFOM", 0],
        ["Aircraft Time", 0],
        ["UTC Time", 0],
        ["Day of Year", 0],
        ["Week Number", 0],
        ["Year", 0]
      ]
  }

}
