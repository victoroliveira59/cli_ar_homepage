import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { BUSINESS_INFO } from '../../core/business-info';
import { ServiceDetail, SERVICES_DATA } from '../../data/services-data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: ServiceDetail | null = null;
  businessInfo = BUSINESS_INFO;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug || !SERVICES_DATA[slug]) {
      this.router.navigate(['/404'], { replaceUrl: true });
      return;
    }

    this.service = SERVICES_DATA[slug];

    this.seoService.setMetadata({
      title: this.service.title,
      description: this.service.description,
      canonicalUrl: `${BUSINESS_INFO.domain}/servicos/${this.service.slug}`
    });

    this.seoService.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${BUSINESS_INFO.domain}/servicos/${this.service.slug}#service`,
          name: this.service.name,
          description: this.service.description,
          provider: {
            '@type': 'HVACBusiness',
            name: BUSINESS_INFO.tradeName,
            url: BUSINESS_INFO.domain,
            telephone: BUSINESS_INFO.telephone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: BUSINESS_INFO.address.streetAddress,
              addressLocality: BUSINESS_INFO.address.addressLocality,
              addressRegion: BUSINESS_INFO.address.addressRegion,
              postalCode: BUSINESS_INFO.address.postalCode,
              addressCountry: BUSINESS_INFO.address.addressCountry
            }
          },
          areaServed: BUSINESS_INFO.servedAreas.map(area => ({
            '@type': 'City',
            name: area
          })),
          offers: {
            '@type': 'Offer',
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
            warranty: '90 dias'
          }
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
              name: 'Serviços',
              item: `${BUSINESS_INFO.domain}/servicos`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: this.service.shortName,
              item: `${BUSINESS_INFO.domain}/servicos/${this.service.slug}`
            }
          ]
        }
      ]
    });
  }

  getWhatsAppLink(): string {
    if (!this.service) {
      return BUSINESS_INFO.whatsappUrl;
    }
    const message = encodeURIComponent(this.service.whatsappMessage);
    return `https://wa.me/5531992855049?text=${message}`;
  }
}
