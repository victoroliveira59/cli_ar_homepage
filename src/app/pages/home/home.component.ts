import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WhatsappModalService } from '../../services/whatsapp-modal.service';
import { SeoService } from '../../core/seo.service';
import { BUSINESS_INFO } from '../../core/business-info';
import { ReviewsCarouselComponent } from '../../components/reviews-carousel/reviews-carousel.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule, ReviewsCarouselComponent]
})
export class HomeComponent implements OnInit {
  isContentVisible = true;
  isLoading = false;
  business = BUSINESS_INFO;

  // Categorias Multimarcas
  marcasClimatizacao = [
    'Daikin', 'Fujitsu', 'LG', 'Samsung', 'Midea',
    'Carrier', 'Springer', 'Hitachi', 'Elgin', 'Gree'
  ];

  marcasLinhaBranca = [
    'Brastemp', 'Consul', 'Electrolux', 'Panasonic', 'Continental', 'Bosch'
  ];

  marcasComercial = [
    'Metalfrio', 'Gelopar', 'Everest', 'Venâncio', 'Fricon', 'IBBL', 'Libell'
  ];

  constructor(
    private modalService: WhatsappModalService,
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.isContentVisible = true;
    this.isLoading = false;

    this.seoService.setMetadata({
      title: 'Alves Refrigeração | Climatização em Nova Lima MG',
      description: 'Assistência técnica em ar-condicionado, geladeiras, freezers e chopeiras em Nova Lima e região. Peças originais e garantia de 90 dias. Ligue já!',
      canonicalUrl: `${BUSINESS_INFO.domain}/`
    });

    this.seoService.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HVACBusiness',
          '@id': `${BUSINESS_INFO.domain}/#organization`,
          name: BUSINESS_INFO.tradeName,
          legalName: BUSINESS_INFO.legalName,
          url: BUSINESS_INFO.domain,
          telephone: BUSINESS_INFO.telephone,
          email: BUSINESS_INFO.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS_INFO.address.streetAddress,
            addressLocality: BUSINESS_INFO.address.addressLocality,
            addressRegion: BUSINESS_INFO.address.addressRegion,
            postalCode: BUSINESS_INFO.address.postalCode,
            addressCountry: BUSINESS_INFO.address.addressCountry
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS_INFO.geo.latitude,
            longitude: BUSINESS_INFO.geo.longitude
          },
          areaServed: BUSINESS_INFO.servedAreas.map(area => ({
            '@type': 'City',
            name: area
          })),
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00'
            }
          ],
          priceRange: '$$'
        },
        {
          '@type': 'WebSite',
          '@id': `${BUSINESS_INFO.domain}/#website`,
          url: BUSINESS_INFO.domain,
          name: BUSINESS_INFO.tradeName,
          publisher: {
            '@id': `${BUSINESS_INFO.domain}/#organization`
          },
          inLanguage: 'pt-BR'
        }
      ]
    });
  }

  openWhatsApp(): void {
    this.modalService.open();
  }
}
