import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../scroll.service';

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

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
    this.menuVisible = !this.menuVisible;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.toggleMenu(); // Fecha o menu após clicar em um link
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 768) {
      this.menuAberto = false;
      this.menuVisible = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Scroll detectado! Posição:', window.scrollY);
      this.isScrolled = window.scrollY > 50;
    }
  }
}
