import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ResourceComponent } from './resource/resource.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ResourceComponent,
    NextStepsComponent,
    FooterComponent,
    HighlightCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    ResourceComponent,
    NextStepsComponent,
    FooterComponent,
    HighlightCardComponent
  ]
})
export class PagesModule { }
