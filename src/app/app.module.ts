import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BtnOrcamentoIniciarComponent } from './btn-orcamento-iniciar/btn-orcamento-iniciar.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [RootComponent, HeaderComponent, CarouselComponent, BtnOrcamentoIniciarComponent, TestimonialsComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
