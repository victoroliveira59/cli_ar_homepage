import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'cli_ar';
  isHomePage = true; // Inicialmente assume que é a home
  menuAberto = false; // Inicialmente assume que o menu está fechado
  menuVisible = true;  // Controla a visibilidade do menu

  constructor(private scrollService: ScrollService) { }

  // Função para alternar a abertura e fechamento do menu
  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  // Usando o serviço para rolar para a seção
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault(); // Impede o comportamento padrão de navegação
    this.scrollService.scrollToSection(sectionId); // Chama o método do serviço
    this.menuAberto = false; // Fecha o menu após o clique
  }

  // Listener de rolagem para esconder o menu
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 50) {  // Quando a rolagem passar de 50px, esconder o menu
      this.menuVisible = false;
    } else {
      this.menuVisible = true;  // Quando o usuário voltar para o topo, mostrar o menu novamente
    }
  }
}
