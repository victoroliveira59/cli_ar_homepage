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
      nome: 'Conserto de Refrigeradores Domésticos',
      descricao: 'Serviço especializado em reparos para geladeiras residenciais de todas as marcas.',
      imagem: 'assets/img/conserto_geladeiras.jpg',
      detalhes: 'Resolvemos problemas como falta de refrigeração, vazamentos, portas que não vedam, gelo excessivo no freezer e defeitos no compressor. Utilizamos peças originais e garantimos um diagnóstico preciso.'
    },
    {
      nome: 'Reparo Elétrico e Troca de Placas',
      descricao: 'Soluções para falhas elétricas e substituição de placas de geladeiras.',
      imagem: 'assets/img/troca-placa.png',
      detalhes: 'Realizamos reparos em fiações, troca de placas eletrônicas (inversoras, controladoras), substituição de termostatos e sensores. Garantimos a segurança e eficiência do sistema elétrico do seu refrigerador.'
    },
    {
      nome: 'Recarga de Gás Refrigerante',
      descricao: 'Recarga profissional com os gases adequados para seu modelo.',
      imagem: 'assets/img/recarga-fluido.jpg',
      detalhes: 'Trabalhamos com gases como R-134a (frost-free), R-600a (ecológico) e R-12 (modelos antigos). Além da recarga, verificamos vazamentos e fazemos a manutenção do sistema de refrigeração.'
    },
    {
      nome: 'Manutenção Preventiva',
      descricao: 'Cuidados periódicos para evitar problemas futuros.',
      imagem: 'assets/img/limpeza-geladeiras.jpg',
      detalhes: 'Inclui limpeza interna, verificação de borrachas de vedação, calibração de termostatos, inspeção de componentes elétricos e ajustes no sistema de refrigeração. Prolongue a vida útil do seu aparelho com nosso serviço.'
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
