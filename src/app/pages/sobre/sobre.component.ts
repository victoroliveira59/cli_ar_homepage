import { Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sobre',
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements AfterViewInit {

  @ViewChildren('imageRef, descRef') elements!: QueryList<ElementRef>;
  sobreEmpresaItems = [
    {
      imgSrc: 'assets/img/historia.jpg',
      titulo: 'Nossa História',
      descricao: 'Fundada há mais de 10 anos, a Alves Refrigeração começou com o objetivo de levar conforto térmico e soluções eficientes para lares e empresas. Desde o início, nossa missão foi oferecer serviços de qualidade com um atendimento próximo e personalizado.'
    },
    {
      imgSrc: 'assets/img/missao.jpg',
      titulo: 'Missão, Visão e Valores',
      descricao: 'Nossa missão é proporcionar bem-estar e eficiência energética aos nossos clientes. Valorizamos a integridade, o compromisso com a qualidade e a inovação constante. Nossa visão é ser referência no setor de refrigeração, oferecendo sempre as melhores soluções.'
    },
    {
      imgSrc: 'assets/img/diferenciais.jpg',
      titulo: 'Nossos Diferenciais',
      descricao: 'Contamos com uma equipe de profissionais altamente qualificados, equipamentos de ponta e um compromisso inabalável com a satisfação do cliente. Nosso diferencial é a combinação de tecnologia e atendimento humanizado.'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const index = this.elements.toArray().findIndex((el: ElementRef) => el.nativeElement === target);


          if (index !== -1) {
            if (entry.isIntersecting) {
              // Entrou na viewport: animação de entrada
              target.classList.remove('animate-left-out', 'animate-right-out');
              target.classList.add(index % 2 === 0 ? 'animate-left' : 'animate-right');
            } else {
              // Saiu da viewport: animação de saída
              target.classList.remove('animate-left', 'animate-right');
              target.classList.add(index % 2 === 0 ? 'animate-left-out' : 'animate-right-out');
            }
          }
        });
      }, { threshold: 0.1 });

      this.elements.forEach((el) => observer.observe(el.nativeElement));
    }
  }
}