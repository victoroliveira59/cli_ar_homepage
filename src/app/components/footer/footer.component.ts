import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BUSINESS_INFO } from '../../core/business-info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  businessInfo = BUSINESS_INFO;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollToSection(event: Event, sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(sectionId);
      if (el) {
        event.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
