import { Component } from '@angular/core';
import { TeamComponent } from '../../features/components/team/team.component';
import { TeamitemComponent } from '../../features/components/teamitem/teamitem.component';

@Component({
  selector: 'app-teampage',
  imports: [TeamitemComponent],
  templateUrl: './teampage.component.html',
  styleUrl: './teampage.component.css'
})
export class TeampageComponent {
  numbers = [0, 1, 2,3,4,5];
}
