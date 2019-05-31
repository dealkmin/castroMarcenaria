import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../../services/estimate.service';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {
  currentFormIndex: number;
  forms = [
    {
      title: 'ambiente',
      type: 'DROPDOWN',
      fields: [{ label: 'Ambiente', values: ['Quarto', 'Sala', 'Cozinha'] }]
    },
    {
      title: 'tipo do móvel',
      type: 'DROPDOWN',
      fields: [
        { label: 'tipo do móvel', values: ['Quarto', 'Sala', 'Cozinha'] }
      ]
    }
  ];

  constructor(private estimateService: EstimateService) {
    this.currentFormIndex = 0;
  }

  ngOnInit() {}

  nextForm() {
    if (this.hasNextForm()) {
      this.currentFormIndex += 1;
    }
  }

  hasNextForm() {
    return this.currentFormIndex < this.forms.length - 1;
  }

  previousForm() {
    if (this.hasPreviousForm()) {
      this.currentFormIndex -= 1;
    }
  }

  hasPreviousForm() {
    return this.currentFormIndex > 0;
  }
}
