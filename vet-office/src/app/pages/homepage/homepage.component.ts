import { Component } from '@angular/core';
import { FeaturesModule } from '../../features/features.module';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [FeaturesModule],
  providers: [DatePipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
