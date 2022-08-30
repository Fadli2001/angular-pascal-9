import { ServiceComponent } from './service/service.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ServiceComponent    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
