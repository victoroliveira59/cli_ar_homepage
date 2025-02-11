import { Component, HostListener } from '@angular/core'
import { ScrollService } from '../../scroll.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuAberto = false  // Estado do menu (aberto/fechado)
  menuVisible = true  // Controla visibilidade do menu com rolagem

  constructor(private scrollService: ScrollService) {}

  // Alterna a abertura e fechamento do menu
  toggleMenu() {
    this.menuAberto = !this.menuAberto
    this.toggleOverlay(this.menuAberto)
  }

  // Fecha o menu e o overlay quando um link é clicado
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault()
    this.scrollService.scrollToSection(sectionId)
    this.menuAberto = false
    this.toggleOverlay(false)
  }

  // Exibe ou esconde o overlay
  toggleOverlay(show: boolean) {
    const overlay = document.querySelector('.overlay') as HTMLElement
    if (overlay) {
      if (show) {
        overlay.classList.add('active')
      } else {
        overlay.classList.remove('active')
      }
    }
  }

  // Fecha o menu clicando fora do sidebar
  closeMenuOnClickOutside(event: Event) {
    const navLinks = document.querySelector('.nav-links') as HTMLElement
    if (this.menuAberto && !navLinks.contains(event.target as Node)) {
      this.menuAberto = false
      this.toggleOverlay(false)
    }
  }

  // Esconde o menu com a rolagem para baixo
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.menuVisible = window.scrollY <= 50
  }

  // Fecha o menu se clicar fora dele
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.closeMenuOnClickOutside(event)
  }
}
