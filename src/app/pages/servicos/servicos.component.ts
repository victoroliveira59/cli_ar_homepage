import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule, SlickCarouselComponent } from 'ngx-slick-carousel';
import { ModalComponent } from "../../modal/modal.component";
import { SeoService } from '../../core/seo.service';
import { BUSINESS_INFO } from '../../core/business-info';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, RouterModule, SlickCarouselModule, ModalComponent],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit, AfterViewInit {
  currentSlide = 0;

  servicos = [
    {
      nome: 'Instalação de Ar-Condicionado',
      slug: 'instalacao-ar-condicionado',
      descricao: 'Instalação técnica de splits, multi-splits e inversores com processo a vácuo e 90 dias de garantia.',
      icon: 'fa-wind',
      imagem: 'assets/img/ConcertoArcond.png',
      detalhes: 'Realizamos instalação profissional conforme as normas dos fabricantes. Tubulação de cobre, suporte antivibratório e vácuo digital no sistema. Garantia de 90 dias em Nova Lima e região.'
    },
    {
      nome: 'Manutenção e Higienização de Ar-Condicionado',
      slug: 'manutencao-ar-condicionado',
      descricao: 'Manutenção preventiva, conserto de placas, recarga de gás refrigerante e higienização bactericida.',
      icon: 'fa-tools',
      imagem: 'assets/img/ConcertoArcond.png',
      detalhes: 'Atendemos splits, multi-splits e cassetes de todas as marcas. Limpeza bactericida profunda, eliminação de vazamentos e recarga de gases R-410A, R-32 e R-22 com balança digital.'
    },
    {
      nome: 'Conserto de Geladeiras e Freezers',
      slug: 'conserto-geladeira-freezer',
      descricao: 'Diagnóstico preciso e reparo de refrigeradores domésticos e industriais de todas as marcas.',
      icon: 'fa-snowflake',
      imagem: 'assets/img/ConcertoGeladeira.png',
      detalhes: 'Resolvemos problemas como falta de refrigeração, vazamentos, portas que não vedam, gelo excessivo no freezer e defeitos no compressor. Utilizamos peças originais e garantimos um diagnóstico preciso com garantia de 90 dias.'
    },
    {
      nome: 'Chopeiras e Bebedouros',
      slug: 'chopeiras-bebedouros',
      descricao: 'Manutenção e conserto de chopeiras industriais e bebedouros para bares, restaurantes e escritórios.',
      icon: 'fa-glass-cheers',
      imagem: 'assets/img/ConcertoBebedouro.png',
      detalhes: 'Realizamos manutenção preventiva e corretiva em chopeiras industriais e bebedouros de todas as marcas. Limpeza completa, troca de filtros, regulagem de temperatura e reparo de componentes. Atendimento rápido para bares, restaurantes e escritórios em Nova Lima e região.'
    }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: true,
    infinite: true,
    dots: false,
    arrows: false,
    cssEase: 'ease-in-out',
    fade: true,
    afterChange: (e: number) => this.currentSlide = e,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  @ViewChild('tituloServicos') titulo!: ElementRef;
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  // Estado do modal
  isModalOpen: boolean = false;
  modalTitle: string = '';
  modalDescription: string = '';
  isMobile = false;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Conserto de Refrigeração em Nova Lima | Alves Refrigeração',
      description: 'Assistência técnica em refrigeração doméstica e comercial em Nova Lima. Geladeiras, freezers, chopeiras e bebedouros. Garantia de 90 dias e peças originais.',
      canonicalUrl: `${BUSINESS_INFO.domain}/servicos`
    });

    this.seoService.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: `${BUSINESS_INFO.domain}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Serviços',
          item: `${BUSINESS_INFO.domain}/servicos`
        }
      ]
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        if (this.titulo) {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-grow');
              } else {
                entry.target.classList.remove('animate-grow');
              }
            });
          }, { threshold: 0.5 });

          observer.observe(this.titulo.nativeElement);
        }
      }, 100);
    }
  }

  openModal(servico: any) {
    this.modalTitle = servico.nome;
    this.modalDescription = servico.detalhes;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;
    }
  }

  handleImageError(event: any) {
    console.error('Erro ao carregar imagem:', event);
  }
}
