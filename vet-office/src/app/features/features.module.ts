import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NewsCardComponent } from './components/newscard/newscard.component';
import { SuccessComponent } from './components/success/success.component';
import { TeamComponent } from './components/team/team.component';
import { SpecializationitemComponent } from './components/specializationitem/specializationitem.component';
import { TeamitemComponent } from './components/teamitem/teamitem.component';
import { ReviewComponent } from './components/review/review.component';
import { GoogleMapsModule } from '@angular/google-maps'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    NewsCardComponent,
    SuccessComponent,
    TeamComponent,
    SpecializationitemComponent,
    TeamitemComponent,
    ReviewComponent,
    GoogleMapsModule
  ],
  exports: [
    HomeComponent,
    NewsCardComponent,
    SuccessComponent,
    TeamComponent,
    SpecializationitemComponent, 
    TeamitemComponent, 
    ReviewComponent, 
    GoogleMapsModule]
})
export class FeaturesModule { }
