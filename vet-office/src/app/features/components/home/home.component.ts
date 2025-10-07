import { Component } from '@angular/core';
import { ComunicationService } from '../../../services/communication.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private comunicationService: ComunicationService){}

  onSendSms(): void{
    this.comunicationService.openSMS();
  }

}
