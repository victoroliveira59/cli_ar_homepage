import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { BUSINESS_INFO } from '../../core/business-info';
import { WhatsappModalService } from '../../services/whatsapp-modal.service';

export interface ServicoCard {
  nome: string;
  slug: string;
  resumo: string;
  imagem: string;
  icone: string;
  destaques: string[];
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  businessInfo = BUSINESS_INFO;

  // Catálogo com 6 Especialidades Técnicas e Fotos Reais
  servicos: ServicoCard[] = [
    {
      nome: 'Instalação de Ar-Condicionado',
      slug: 'instalacao-ar-condicionado',
      resumo: 'Instalação técnica padrão de splits, multi-splits e inverter seguindo rigorosamente as normas dos fabricantes.',
      imagem: '/assets/img/ConcertoArcond.webp',
      icone: 'fas fa-wind',
      destaques: ['Vácuo profundo digital', 'Suportes reforçados', 'Garantia de 90 dias']
    },
    {
      nome: 'Manutenção Preventiva & Higienização',
      slug: 'manutencao-ar-condicionado',
      resumo: 'Higienização bactericida profunda, eliminação de maus odores, limpeza de turbinas e aplicação de bactericida.',
      imagem: '/assets/img/manutencao-preventiva.webp',
      icone: 'fas fa-shield-virus',
      destaques: ['Padrão PMOC', 'Economia na conta de luz', 'Ar puro e saudável']
    },
    {
      nome: 'Recarga de Gás & Teste de Vazamentos',
      slug: 'manutencao-ar-condicionado',
      resumo: 'Recarga com fluido refrigerante ecológico (R-410A, R-32, R-22) utilizando balança digital de precisão.',
      imagem: '/assets/img/recarga-fluido.webp',
      icone: 'fas fa-tachometer-alt',
      destaques: ['Teste de estanqueidade', 'Fluido homologado', 'Eliminação de microvazamentos']
    },
    {
      nome: 'Reparo de Placas & Compressores',
      slug: 'conserto-geladeira-freezer',
      resumo: 'Diagnóstico eletrônico avançado em placas inversoras, sensores térmicos e substituição de compressores.',
      imagem: '/assets/img/troca-placa.webp',
      icone: 'fas fa-microchip',
      destaques: ['Ferramental calibrado', 'Peças originais', 'Reparo no mesmo dia']
    },
    {
      nome: 'Conserto de Geladeiras & Freezers',
      slug: 'conserto-geladeira-freezer',
      resumo: 'Reparo de refrigeradores frost-free, side-by-side e freezers residenciais e comerciais de todas as marcas.',
      imagem: '/assets/img/ConcertoGeladeira.webp',
      icone: 'fas fa-snowflake',
      destaques: ['Troca de termostatos e sensores', 'Atendimento domiciliar', 'Peças com procedência']
    },
    {
      nome: 'Chopeiras Comerciais & Bebedouros',
      slug: 'chopeiras-bebedouros',
      resumo: 'Assistência técnica para bares, restaurantes e empresas. Manutenção em chopeiras elétricas e bebedouros industriais.',
      imagem: '/assets/img/ConcertoBebedouro.webp',
      icone: 'fas fa-beer',
      destaques: ['Sanitização de serpentinas', 'Troca de refis e filtros', 'Atendimento ágil para comércio']
    }
  ];

  // 4 Passos Exclusivos desta página
  passosAtendimento = [
    {
      numero: '1',
      titulo: 'Contato via WhatsApp',
      descricao: 'Você nos informa o sintoma do equipamento e seu endereço em Nova Lima ou BH.',
      icone: 'fab fa-whatsapp'
    },
    {
      numero: '2',
      titulo: 'Agendamento Rápido',
      descricao: 'Marcamos a visita técnica no seu domicílio com pontualidade e técnico identificado.',
      icone: 'fas fa-calendar-check'
    },
    {
      numero: '3',
      titulo: 'Diagnóstico e Reparo',
      descricao: 'Apresentamos o orçamento claro e realizamos o conserto com peças originais e ferramental moderno.',
      icone: 'fas fa-tools'
    },
    {
      numero: '4',
      titulo: 'Entrega com Garantia',
      descricao: 'Testamos tudo na sua presença e emitimos o recibo e termo formal de garantia de 90 dias.',
      icone: 'fas fa-award'
    }
  ];

  constructor(
    private seoService: SeoService,
    private modalService: WhatsappModalService
  ) {}

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

  openWhatsApp(): void {
    this.modalService.open();
  }
}
