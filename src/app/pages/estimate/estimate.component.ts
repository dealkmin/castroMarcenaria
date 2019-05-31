import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../../services/estimate.service';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {
  forms: any[];
  currentForm: number;

  constructor(private estimateService: EstimateService) {
    this.currentForm = 0;
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
