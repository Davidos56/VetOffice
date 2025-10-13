import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateService } from '@ngx-translate/core';
CommonModule
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, PagesModule, CommonModule, GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translateService: TranslateService){
    this.translateService.use('pl')
  }
  title = 'vet-office';
}
