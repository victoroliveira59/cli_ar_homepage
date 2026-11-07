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

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit {
  isContentVisible = true;
  isLoading = false;

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
  }

  openWhatsApp(): void {
    this.modalService.open();
  }
}
