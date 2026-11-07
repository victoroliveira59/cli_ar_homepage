import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BUSINESS_INFO } from '../../core/business-info';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  businessInfo = BUSINESS_INFO;
  menuAberto: boolean = false;
  menuVisible: boolean = false;
  isScrolled: boolean = false;
  scrolled: boolean = false;

  @ViewChild('nav', { static: true }) myNav!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  menuItems = [
    { label: 'Home', routerLink: '/', icon: 'fas fa-home' },
    { label: 'Serviços', routerLink: '/servicos', icon: 'fa-solid fa-snowflake' },
    { label: 'Sobre Nós', routerLink: '/sobre', icon: 'fas fa-users' },
    { label: 'Contato', routerLink: '/contato', icon: 'fas fa-phone-alt' }
  ];

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.menuAberto ? 'hidden' : '';
    }
  }

  closeMenu() {
    this.menuAberto = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 768) {
      this.menuAberto = false;
      this.menuVisible = false;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled = window.scrollY > 400;
    }
  }
}
