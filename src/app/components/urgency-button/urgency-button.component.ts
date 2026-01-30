import { Component } from '@angular/core' ; 
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
    const message = encodeURIComponent('Olá, vim pelo site e gostaria de um orçamento.');
    const url = `https://wa.me/553192855049?text=${message}`;
    window.open(url, '_blank');
  }
}
