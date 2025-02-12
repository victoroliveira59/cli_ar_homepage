import { Component, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { ScrollService } from '../../scroll.service';


@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule] // Adicionando CommonModule nas importações
})
export class HomeComponent implements AfterViewInit {
  isImageVisible: boolean = false;  // Flag para controlar a visibilidade da imagem
  isUrgencyExpanded: boolean = false;
  isContentVisible = false;

  constructor(private scrollService: ScrollService, private cdr: ChangeDetectorRef) { }

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

  toggleUrgencyMessage(): void {
    this.isUrgencyExpanded = !this.isUrgencyExpanded;
  }

  ngOnInit() {
    this.isImageVisible = true;
  }

  ngAfterViewInit() {
    // Iniciar animação após a inicialização da view
    this.isImageVisible = true;

    // Atrasar o conteúdo com um pequeno intervalo, para dar tempo da imagem começar a transição
    setTimeout(() => {
      this.isContentVisible = true;

      // Força a detecção de mudanças após a alteração do estado
      this.cdr.detectChanges();
    }, 500); // Pequeno atraso para o conteúdo começar a aparecer
  }
}
