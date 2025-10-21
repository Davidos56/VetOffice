import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SpecializationspageComponent } from './specializationspage/specializationspage.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, HomepageComponent, SpecializationspageComponent,
  ],
  exports:[HomepageComponent, SpecializationspageComponent,]
})
export class PagesModule { }
