import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'noinput',
  templateUrl: './noinput.component.html',
  styleUrls: ['./noinput.component.css']
})
export class NoinputComponent implements OnInit {
  @Input() key: any[];
  @Input() value: any[];

  constructor() { }

  ngOnInit() {}
}
