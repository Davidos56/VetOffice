import { Component } from '@angular/core';
import { TeamitemComponent } from '../teamitem/teamitem.component';

@Component({
  selector: 'app-team',
  imports: [TeamitemComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  numbers = [0, 1, 2];
}
