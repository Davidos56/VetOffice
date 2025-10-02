import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturesModule } from '../features/features.module';
import { SpecializationspageComponent } from './specializationspage/specializationspage.component';
import { TeampageComponent } from './teampage/teampage.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, HomepageComponent, SpecializationspageComponent, TeampageComponent
  ],
  exports:[HomepageComponent, SpecializationspageComponent, TeampageComponent]
})
export class PagesModule { }
