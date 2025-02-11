import { Component, HostListener } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ScrollService } from '../../scroll.service'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuAberto = false
  menuVisible = true

  constructor(private scrollService: ScrollService) {}

  // Alternar abertura/fechamento do sidebar
  toggleMenu() {
    this.menuAberto = !this.menuAberto
  }

  // Rolagem suave para a seção correspondente
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault()
    this.scrollService.scrollToSection(sectionId)
    this.menuAberto = false // Fecha o sidebar após clicar em um link
  }

  // Esconde o menu quando o usuário rolar para baixo
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.menuVisible = window.scrollY <= 50
  }
}
