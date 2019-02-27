import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'noinput',
  templateUrl: './noinput.component.html',
  styleUrls: ['./noinput.component.css']
})
export class NoinputComponent implements OnInit {
  @Input() rowEntries: any[];

  constructor() { }

  ngOnInit() {}
}
