import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    PageComponent
  ]

})
export class PageModule { }
