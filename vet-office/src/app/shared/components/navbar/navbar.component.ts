import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppConfig } from '../../../core/app-config';
import { ComunicationService } from '../../../services/communication.service';
import { NavigationService } from '../../../services/navigation.service';
import { GoogleService } from '../../../services/google.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  constructor(
    private comunicationService: ComunicationService,
    private navigationService: NavigationService,
    private googleService: GoogleService) { }
  isScrolled = false;
  scrolledBackground = ""
  phoneNumber:string = ""
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
    this.comunicationService.openSMS();
  }
  onMakeCall(): void {
    this.comunicationService.makeCall(this.phoneNumber);

  }
  onOpenNavigate(): void {
    this.navigationService.openNavigation();
  }
}


