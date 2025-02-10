import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { ScrollService } from '../../scroll.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule] // Adicionando CommonModule nas importações
})
export class HomeComponent {
  isImageVisible: boolean = false;  // Flag para controlar a visibilidade da imagem

  constructor(private scrollService: ScrollService) { }

  // Método para rolar para a seção 'servicos'
  goToServicos(): void {
    this.scrollService.scrollToSection('contato'); // Chama o método do serviço
  }

  // Detecção de rolagem para mostrar a imagem
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.scrollY; // Posição da rolagem da página
    const heroSection = document.querySelector('.hero') as HTMLElement;

    // Quando o topo da seção hero chegar perto do topo da tela, a imagem vai surgir
    if (scrollPosition > heroSection.offsetTop - window.innerHeight) {
      this.isImageVisible = true;
    }
  }
}
