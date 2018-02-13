import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'power-booster',
  templateUrl: './power-booster.component.html',
  styleUrls: ['./power-booster.component.css']
})
export class PowerBoosterComponent implements OnInit {
  power = 5;
  factor = 1;
  constructor() { }

  ngOnInit() {
  }

}
