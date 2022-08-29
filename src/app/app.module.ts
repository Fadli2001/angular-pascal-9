import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { NextStepsComponent } from './pages/next-steps/next-steps.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HighlightCardComponent } from './pages/highlight-card/highlight-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourceComponent,
    NextStepsComponent,
    FooterComponent,
    HighlightCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
