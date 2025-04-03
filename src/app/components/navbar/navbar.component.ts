import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuAberto: boolean = false;
  menuVisible: boolean = false;
  isScrolled: boolean = false;
  scrolled: boolean = false;

  @ViewChild('nav', { static: true }) myNav!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }


  menuItems = [
    { label: 'Home', id: 'home', href: '#home', icon: 'fas fa-home' },
    { label: 'Serviços', id: 'servicos', href: '#servicos', icon: 'fa-solid fa-snowflake' },
    { label: 'Sobre Nós', id: 'sobre', href: '#sobre', icon: 'fas fa-users' },
    { label: 'Contato', id: 'contato', href: '#contato', icon: 'fas fa-phone-alt' }
  ];


  toggleMenu() {
    this.menuAberto = !this.menuAberto;
    document.body.style.overflow = this.menuAberto ? 'hidden' : '';
  }


  closeMenu() {
    this.menuAberto = false;
    document.body.style.overflow = '';
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.menuAberto = false;
    document.body.style.overflow = '';
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

    this.scrolled = window.scrollY > 400;
    // Opcional: controle mais granular da transição
    const scrollPosition = window.scrollY;
    const logo = document.querySelector('.logo-img') as HTMLElement;

  }
}

