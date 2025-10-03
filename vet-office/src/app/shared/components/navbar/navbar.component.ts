import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
isScrolled = false;
scrolledBackground = ""

 @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; 
    if(this.isScrolled) {
      this.scrolledBackground = 'scrolled'
    }else{
      this.scrolledBackground = ''
    }
  }
}


