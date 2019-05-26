import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RootComponent } from './root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EstimateComponent } from './pages/estimate/estimate.component';
import { FormComponent } from './components/form/form.component';
import { ZoomHoverComponent } from './components/zoom-hover/zoom-hover.component';
import { GridHomeComponent } from './grid-home/grid-home.component';

@NgModule({
  declarations: [
    RootComponent,
    NavigationComponent,
    CarouselComponent,
    HomeComponent,
    EstimateComponent,
    FormComponent,
    ZoomHoverComponent,
    GridHomeComponent
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
