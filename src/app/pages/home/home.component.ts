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

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;

    // Efeito parallax
    const parallaxBg = document.querySelector('.parallax-bg') as HTMLElement;
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrollPosition * 0.10}px)`; // Ajuste o fator para controlar o efeito
    }

    // Mostrar imagem ao rolar
    const heroSection = document.querySelector('.hero') as HTMLElement;
    if (scrollPosition > heroSection.offsetTop - window.innerHeight) {
      this.isImageVisible = true;
    }
  }

  toggleUrgencyMessage(): void {
    this.isUrgencyExpanded = !this.isUrgencyExpanded;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isImageVisible = true; // Exibe a imagem
      this.isContentVisible = true; // Exibe o conteúdo com efeito de entrada
      this.cdr.detectChanges(); // Garante a detecção de mudanças no Angular
    }, 1000); // Pequeno atraso para a transição suave
  }

  onImageLoad(): void {
    // Atrasar o conteúdo com um pequeno intervalo, para dar tempo da imagem começar a transição
    setTimeout(() => {
      this.isContentVisible = true;

      // Força a detecção de mudanças após a alteração do estado
      this.cdr.detectChanges();
    }, 500);
  }
}
