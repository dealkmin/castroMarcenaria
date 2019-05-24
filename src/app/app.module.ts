import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [RootComponent, HeaderComponent, CarouselComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
