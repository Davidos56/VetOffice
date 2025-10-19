import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppConfig } from '../../../core/app-config';
import { ComunicationService } from '../../../services/communication.service';
import { GoogleService } from '../../../services/google.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  constructor(
    private comunicationService: ComunicationService,
    private googleService: GoogleService,
    private el: ElementRef) { }
  isScrolled = false;
  scrolledBackground = ""
  phoneNumber:string = ""
  isToogleOn = false;
  windowWidth: number = 0;
  public appConfig = AppConfig;

  ngOnInit(): void {
   this.googleService.getPhoneNumber().subscribe(x=>this.phoneNumber = x)
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    if (this.isScrolled) {
      this.scrolledBackground = 'scrolled'
    } else {
      this.scrolledBackground = ''
    }
  }

  onSendSms(): void {
    this.comunicationService.openSMS(this.phoneNumber);
  }
  onMakeCall(): void {
    this.comunicationService.makeCall(this.phoneNumber);

  }
  onOpenNavigate(): void {
    this.googleService.openNavigation();
  }
}


