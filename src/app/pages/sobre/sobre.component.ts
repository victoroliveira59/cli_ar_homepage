import { Component, Inject, PLATFORM_ID, HostListener, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReviewsCarouselComponent } from '../../components/reviews-carousel/reviews-carousel.component';
import { SeoService } from '../../core/seo.service';
import { BUSINESS_INFO } from '../../core/business-info';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, ReviewsCarouselComponent],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  isMobile = false;

  stats = [
    { icon: 'fa-calendar-check', number: '2+', label: 'Anos de experiência' },
    { icon: 'fa-map-marker-alt', number: 'Nova Lima', label: 'e região' },
    { icon: 'fa-smile',          number: '100%',     label: 'Satisfação garantida' },
    { icon: 'fa-award',          number: '90 dias',  label: 'Garantia nos serviços' },
  ];

  mvvItems = [
    {
      icon: 'fa-bullseye',
      titulo: 'Nossa Missão',
      descricao: 'Proporcionar conforto térmico e eficiência energética com atendimento rápido, preços justos e garantia de qualidade em Nova Lima e região.'
    },
    {
      icon: 'fa-eye',
      titulo: 'Nossa Visão',
      descricao: 'Ser a empresa de referência em assistência técnica de refrigeração em Nova Lima, reconhecida pela excelência, ética e comprometimento com cada cliente.'
    },
    {
      icon: 'fa-heart',
      titulo: 'Nossos Valores',
      descricao: 'Honestidade, pontualidade, respeito ao cliente, qualidade no serviço e transparência em cada atendimento — são os pilares da nossa empresa.'
    }
  ];

  diferenciais = [
    'Atendimento no mesmo dia — incluindo fins de semana',
    'Técnicos certificados e experientes',
    'Peças originais com procedência garantida',
    'Garantia de 90 dias em todos os serviços',
    'Orçamento sem compromisso e preço justo',
    'Atendemos residências, comércios e indústrias'
  ];

  marcas = [
    'Daikin', 'LG', 'Samsung', 'Midea', 'Springer', 'Carrier',
    'Electrolux', 'Brastemp', 'Consul', 'Panasonic', 'Hitachi', 'Fujitsu'
  ];

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Sobre a Alves Refrigeração | Assistência em Nova Lima',
      description: 'Conheça a Alves Refrigeração: excelência em climatização e refrigeração em Nova Lima. Equipe técnica capacitada, peças originais e garantia formal.',
      canonicalUrl: `${BUSINESS_INFO.domain}/sobre`
    });
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;
    }
  }
}
