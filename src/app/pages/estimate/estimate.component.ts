import { Component, OnInit } from '@angular/core';
import { Estimate } from '../../models/estimate';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {
  rooms: Estimate;
  forms: any[];
  currentForm: number;

  constructor() {
    this.currentForm = 0;
    this.rooms = new Estimate();
    this.forms = [[this.rooms.constructor.name], 'sapato2', 'sapato3'];
  }

  ngOnInit() {}

  nextForm() {
    if (this.currentForm < this.forms.length - 1) {
      this.currentForm += 1;
    }
  }

  hasNextForm() {
    return this.currentForm < this.forms.length - 1;
  }
}
