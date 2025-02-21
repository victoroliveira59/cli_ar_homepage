import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-urgency-button',
  templateUrl: './urgency-button.component.html',
  styleUrls: ['./urgency-button.component.css'],
  imports: [CommonModule]
})
export class UrgencyButtonComponent {
  isExpanded = false;

  toggleMessage() {
    this.isExpanded = !this.isExpanded;
  }

  redirectToWhatsApp(): void {
    window.open('https://wa.me/5531999799785');
  }
}
