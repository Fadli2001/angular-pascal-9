import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ComponentsComponent } from './components/components.component';



@NgModule({
  declarations: [
    ArticleComponent,
    ProfileComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResumeModule { }
