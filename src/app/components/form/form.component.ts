import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data: any;
  @Output() submitted: EventEmitter<any>;

  selectedOption: any;

  constructor() {
    this.submitted = new EventEmitter<any>();
  }

  ngOnInit() {}

  selectOption(event) {
    event.preventDefault();

    if (event.target.value != null) {
      this.selectedOption = event.target.value;
    }
  }

  submit(event) {
    event.preventDefault();
    this.submitted.emit(this.selectedOption);
    this.selectedOption = undefined;
  }
}
