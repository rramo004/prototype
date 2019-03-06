import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-madlsublinks',
  templateUrl: './madlsublinks.component.html',
  styleUrls: ['./madlsublinks.component.css']
})
export class MadlsublinksComponent implements OnInit {
  @Input() sublink: any;

  constructor() { 
  this.sublink = {};
  }

  ngOnInit() {
  }

}
