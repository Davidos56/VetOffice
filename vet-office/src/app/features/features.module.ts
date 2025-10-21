import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NewsCardComponent } from './components/newscard/newscard.component';
import { MapsComponent } from './components/maps/maps.component';
import { SpecializationitemComponent } from './components/specializationitem/specializationitem.component';
import { GoogleMapsModule } from '@angular/google-maps'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WelcomeComponent,
    NewsCardComponent,
    MapsComponent,
    SpecializationitemComponent,
    GoogleMapsModule
  ],
  exports: [
    WelcomeComponent,
    NewsCardComponent,
    MapsComponent,
    SpecializationitemComponent, 
    GoogleMapsModule]
})
export class FeaturesModule { }
