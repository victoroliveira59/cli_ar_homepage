import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'cli_ar';
  menuAberto = false; // Inicialmente assume que o menu está fechado

  constructor(private scrollService: ScrollService) { } // Injete o serviço

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
}
