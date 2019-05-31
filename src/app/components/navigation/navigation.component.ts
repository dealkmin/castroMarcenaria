import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../app-routing.module';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  routes: Routes = ROUTES;

  constructor(private router: Router) {}

  ngOnInit() {}

  checkRoutePath(path) {
    return this.router.url === path;
  }
}
