import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { BUSINESS_INFO } from '../../core/business-info';
import { WhatsappModalService } from '../../services/whatsapp-modal.service';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  businessInfo = BUSINESS_INFO;

  stats = [
    { icon: 'fas fa-shield-alt', number: '90 Dias', label: 'Garantia legal formal' },
    { icon: 'fas fa-tools', number: 'Multimarcas', label: 'Ar e refrigeração' },
    { icon: 'fas fa-map-marker-alt', number: 'Nova Lima & BH', label: 'Sede própria' },
    { icon: 'fas fa-clipboard-check', number: '100%', label: 'Orçamento prévio' }
  ];

  mvvItems = [
    {
      icon: 'fas fa-bullseye',
      titulo: 'Nossa Missão',
      descricao: 'Restabelecer o conforto térmico e a conservação com agilidade, preço honesto e peças originais em Nova Lima e região.'
    },
    {
      icon: 'fas fa-eye',
      titulo: 'Nossa Visão',
      descricao: 'Ser a assistência técnica de referência e primeira escolha em climatização e refrigeração em Minas Gerais.'
    },
    {
      icon: 'fas fa-balance-scale',
      titulo: 'Nossos Valores',
      descricao: 'Transparência no diagnóstico, pontualidade britânica, respeito ao patrimônio do cliente e sustentabilidade no manejo de fluidos.'
    }
  ];

  constructor(
    private seoService: SeoService,
    private modalService: WhatsappModalService
  ) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Sobre a Alves Refrigeração | Assistência em Nova Lima',
      description: 'Conheça a Alves Refrigeração: excelência em climatização e refrigeração em Nova Lima. Equipe técnica capacitada, peças originais e garantia formal.',
      canonicalUrl: `${BUSINESS_INFO.domain}/sobre`
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
          name: 'Sobre',
          item: `${BUSINESS_INFO.domain}/sobre`
        }
      ]
    });
  }

  openWhatsApp(): void {
    this.modalService.open();
  }
}
