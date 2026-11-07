import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { BUSINESS_INFO } from '../../core/business-info';

@Component({
  standalone: true,
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  imports: [CommonModule, RouterModule]
})
export class NotFoundComponent implements OnInit {
  businessInfo = BUSINESS_INFO;

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setMetadata({
      title: 'Página Não Encontrada (404) | Alves Refrigeração',
      description: 'A página que você está procurando não foi encontrada. Conheça nossos serviços de ar-condicionado e refrigeração em Nova Lima.',
      robots: 'noindex, follow'
    });
  }
}
