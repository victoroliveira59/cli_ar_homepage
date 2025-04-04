import { Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements AfterViewInit {
  isMobile = false;
  private observer!: IntersectionObserver;
  private elementMap = new Map<HTMLElement, string>(); // Armazena os elementos e suas animações

  @ViewChildren('imageRef, descRef') elements!: QueryList<ElementRef>;

  sobreEmpresaItems = [
    {
      imgSrc: 'assets/img/logos 1.jpg',
      titulo: 'Atendemos diversas marcas',
      descricao: 'Trabalhamos com as principais marcas...'
    },
    {
      imgSrc: 'assets/img/missao_visao_valores.jpg',
      titulo: 'Missão, Visão e Valores',
      descricao: 'Nossa missão é proporcionar bem-estar e eficiência energética aos nossos clientes...'
    },
    {
      imgSrc: 'assets/img/manutenção_geladeiras.jpg',
      titulo: 'Equipe especializada',
      descricao: 'Contamos com uma equipe de profissionais altamente qualificados...'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initObserver();
    }
  }

  private initObserver() {
    this.checkScreenSize(); // Verifica se é mobile antes de atribuir animações

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting && !target.classList.contains('animated')) {
          target.classList.add('animated', this.elementMap.get(target)!);
          this.observer.unobserve(target); // Para não reativar a animação ao rolar para cima
        }
      });
    }, { threshold: 0.2 });

    this.elements.forEach((el, index) => {
      const element = el.nativeElement;
      const animationClass = this.isMobile ? 'animate-center' : (index % 2 === 0 ? 'animate-left' : 'animate-right');

      this.elementMap.set(element, animationClass);
      this.observer.observe(element);
    });
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
}
