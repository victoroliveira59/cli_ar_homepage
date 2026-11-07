import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { BUSINESS_INFO } from '../../core/business-info';
import { FAQS_DATA, REGIONS_DATA, FaqItem, RegionArea } from '../../data/faq-areas-data';

@Component({
  selector: 'app-faq-areas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faq-areas.component.html',
  styleUrls: ['./faq-areas.component.css']
})
export class FaqAreasComponent implements OnInit {
  faqs: FaqItem[] = FAQS_DATA;
  regions: RegionArea[] = REGIONS_DATA;
  businessInfo = BUSINESS_INFO;
  openFaqIndices: Set<number> = new Set([0, 1]); // Primeiras duas perguntas abertas por padrão

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Dúvidas Frequentes e Regiões Atendidas | Alves Refrigeração',
      description: 'Tire suas dúvidas sobre garantia de 90 dias, marcas e prazos de conserto de ar-condicionado e geladeiras em Nova Lima, Raposos, Rio Acima e Grande BH.',
      canonicalUrl: `${BUSINESS_INFO.domain}/perguntas-frequentes`
    });

    this.seoService.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'FAQPage',
          '@id': `${BUSINESS_INFO.domain}/perguntas-frequentes#faq`,
          mainEntity: this.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        },
        {
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
              name: 'Perguntas Frequentes',
              item: `${BUSINESS_INFO.domain}/perguntas-frequentes`
            }
          ]
        }
      ]
    });
  }

  toggleFaq(index: number): void {
    if (this.openFaqIndices.has(index)) {
      this.openFaqIndices.delete(index);
    } else {
      this.openFaqIndices.add(index);
    }
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndices.has(index);
  }
}
