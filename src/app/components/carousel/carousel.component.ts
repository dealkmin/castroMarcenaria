import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    {
      src: 'image_1.jpg',
      comment: "achei lindíssimo",
      name: 'Deborah'
    },
    {
      src: 'image_2.jpg',
      comment: "1achei lindíssimo",
      name: 'Deborah2'
    },
    {
      src: 'image_3.jpg',
      comment: "achei 3lindíssimo",
      name: 'Deborah3'
    },
    {
      src: 'image_4.jpg',
      comment: "achei4 lindíssimo",
      name: 'Deborah4'
    }
  ]; 

  constructor() {}

  ngOnInit() {}
}
