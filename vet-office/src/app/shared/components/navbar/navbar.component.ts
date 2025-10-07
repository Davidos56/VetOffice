import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppConfig } from '../../../core/app-config';
import { ComunicationService } from '../../../services/communication.service';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(private comunicationService: ComunicationService, private navigationService: NavigationService ) {}
isScrolled = false;
scrolledBackground = ""
public appConfig = AppConfig;

 @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; 
    if(this.isScrolled) {
      this.scrolledBackground = 'scrolled'
    }else{
      this.scrolledBackground = ''
    }
  }

  onSendSms(): void{
    this.comunicationService.openSMS();
  }
  onMakeCall(): void{
    this.comunicationService.makeCall();

  }
  onOpenNavigate(): void{
    this.navigationService.openNavigation();
  }
}


