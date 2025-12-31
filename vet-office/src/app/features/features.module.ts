import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/home-welcome/welcome.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { HomeMapsComponent } from './components/home-maps/home-maps.component';
import { GoogleMapsModule } from '@angular/google-maps'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WelcomeComponent,
    HomeNewsComponent,
    HomeMapsComponent,
    GoogleMapsModule
  ],
  exports: [
    WelcomeComponent,
    HomeNewsComponent,
    HomeMapsComponent,
    GoogleMapsModule]
})
export class FeaturesModule { }
