import { Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sobre',
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements AfterViewInit {
  isMobile = false;

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
      descricao: 'Nossa missão é proporcionar bem-estar e eficiência energética aos nossos clientes. Valorizamos a integridade, o compromisso com a qualidade e a inovação constante. Nossa visão é ser referência no setor de refrigeração, oferecendo sempre as melhores soluções.'
    },
    {
      imgSrc: 'assets/img/manutenção_geladeiras.jpg',
      titulo: 'Equipe especializada',
      descricao: 'Contamos com uma equipe de profissionais altamente qualificados, equipamentos de ponta e um compromisso inabalável com a satisfação do cliente. Nosso diferencial é a combinação de tecnologia e atendimento humanizado.'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const index = this.elements.toArray().findIndex(el => el.nativeElement === target);

          if (index !== -1) {
            if (entry.isIntersecting) {
              target.classList.remove('animate-left-out', 'animate-right-out');
              target.classList.add(this.isMobile ? 'animate-center' :
                (index % 2 === 0 ? 'animate-left' : 'animate-right'));
            } else {
              target.classList.remove('animate-left', 'animate-right', 'animate-center');
            }
          }
        });
      }, { threshold: 0.1 });

      this.elements.forEach(el => observer.observe(el.nativeElement));
    }
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Bootstrap md breakpoint
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }
}
