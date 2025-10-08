import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

CommonModule
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, PagesModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vet-office';
}
