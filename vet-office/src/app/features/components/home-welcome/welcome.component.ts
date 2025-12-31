import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../../../services/communication.service';
import { GoogleService } from '../../../services/google.service';
import { GoogleInfo } from '../../../core/googleinfo.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  imports: [TranslatePipe],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  constructor(private comunicationService: ComunicationService, private googleService: GoogleService) { }
  basicInfo: GoogleInfo = {
    name: '',
    formatted_address: '',
    weekday_text: [],
    formatted_phone_number: ''
  };
  ngOnInit(): void {
    this.googleService.getBasicInfo().subscribe(x => {
      this.basicInfo = x
    }
    )
  }

  onSendSms(): void {
    this.comunicationService.openSMS(this.basicInfo.formatted_phone_number);
  }
}
