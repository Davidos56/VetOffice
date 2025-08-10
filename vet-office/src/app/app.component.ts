import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';
import { HomeComponent } from './features/home/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vet-office';
}
