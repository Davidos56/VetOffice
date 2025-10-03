import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 openSMS() {
    const phoneNumber = '+1234567890'; // optional
    const message = 'Hello from Angular!'; // optional
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    
    window.location.href = smsUrl;
  }
}
