import { Component, OnInit, Input,Output } from '@angular/core';
declare var require
const object = require('object-path');

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Input() conditionClickRooms: boolean;
  obj = {
    a: {
      b: "d",
      c: ["e", "f"],
      '\u1200': 'unicode key',
      'dot.dot': 'key'
    }
  };

  constructor() { }

  ngOnInit() {
    console.log('ojectPath: ', object.get(this.obj, "a.b"));
  }

}
