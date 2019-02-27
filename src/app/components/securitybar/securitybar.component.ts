import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'securitybar',
  templateUrl: './securitybar.component.html',
  styleUrls: ['./securitybar.component.css']
})
export class SecuritybarComponent implements OnInit {

  @Input() classification: string;
  isSecret: boolean;

  constructor() { }

  ngOnInit() {
    this.isSecret = (this.classification == 'SECRET' || this.classification == "TS") ? true : false;
  }

}
