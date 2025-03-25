import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SlickCarouselModule, SlickCarouselComponent } from 'ngx-slick-carousel';
import { ModalComponent } from "../../modal/modal.component";

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, ModalComponent],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements AfterViewInit {
  currentSlide = 0;

  servicos = [
    {
      nome: 'Instalação de Ar-Condicionado',
      descricao: 'Serviço profissional de instalação para garantir o melhor desempenho do seu aparelho.',
      imagem: 'assets/img/boas-praticas-refrigeracao.jpg',
      detalhes: 'Oferecemos a instalação de sistemas de ar-condicionado com a escolha adequada do modelo e a correta instalação do sistema de dutos, para garantir o máximo desempenho e eficiência energética do seu aparelho. Nossos técnicos são especializados e seguem rigorosamente as normas de segurança.'
    },
    {
      nome: 'Manutenção Preventiva',
      descricao: 'Evite problemas futuros com uma manutenção regular e eficiente.',
      imagem: 'assets/img/limpeza-de-ar-condicionado-de-janela.jpg',
      detalhes: 'Realizamos a manutenção preventiva dos aparelhos de ar-condicionado, incluindo a limpeza e verificação do sistema de refrigeração, troca de filtros, e inspeção dos componentes elétricos. Essa manutenção ajuda a evitar falhas inesperadas e prolonga a vida útil do equipamento.'
    },
    {
      nome: 'Sistema Elétrico',
      descricao: 'Troca de Componentes Elétricos',
      imagem: 'assets/img/reparo_componentes_eletricos.jpg',
      detalhes: 'Realizamos a troca de componentes elétricos, como capacitores, relés, disjuntores, e outros itens essenciais, para garantir que o sistema elétrico de seu aparelho esteja funcionando corretamente. Nossos profissionais possuem experiência em diversos tipos de sistemas e marcas, garantindo um serviço rápido e seguro.'
    },
    {
      nome: 'Conserto de Equipamentos',
      descricao: 'Diagnóstico e reparo rápido de falhas em aparelhos de diversas marcas.',
      imagem: 'assets/img/troca_compressor.jpg',
      detalhes: 'Oferecemos diagnóstico preciso e consertos rápidos para falhas em aparelhos de ar-condicionado e outros equipamentos, incluindo o reparo de falhas no compressor, vazamentos de gás refrigerante e problemas no circuito elétrico. Trabalhamos com peças originais e garantimos a qualidade do serviço.'
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
    dots: false, // Desativamos os dots padrão pois usamos os personalizados
    arrows: false, // Desativamos as arrows padrão pois usamos as personalizadas
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

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
}
