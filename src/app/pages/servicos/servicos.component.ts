import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  servicos = [
    {
      nome: 'Instalação de Ar-Condicionado',
      descricao: 'Serviço profissional de instalação para garantir o melhor desempenho do seu aparelho.',
      imagem: 'img/boas-praticas-refrigeracao.jpg'
    },
    {
      nome: 'Manutenção Preventiva',
      descricao: 'Evite problemas futuros com uma manutenção regular e eficiente.',
      imagem: 'img/limpeza-de-ar-condicionado-de-janela.jpg'
    },
    {
      nome: 'Sistema Elétrico',
      descricao: 'Troca de Componentes Elétricos',
      imagem: 'img/reparo_componentes_eletricos.jpg'
    },
    {
      nome: 'Conserto de Equipamentos',
      descricao: 'Diagnóstico e reparo rápido de falhas em aparelhos de diversas marcas.',
      imagem: 'img/troca_compressor.jpg'
    }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true,
    dots: true,
    arrows: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
}
