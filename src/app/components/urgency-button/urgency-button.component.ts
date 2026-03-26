import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappModalService } from '../../services/whatsapp-modal.service';

@Component({
  standalone: true,
  selector: 'app-urgency-button',
  templateUrl: './urgency-button.component.html',
  styleUrls: ['./urgency-button.component.css'],
  imports: [CommonModule]
})
export class UrgencyButtonComponent {
  constructor(private modalService: WhatsappModalService) {}

  openWhatsApp(): void {
    this.modalService.open();
  }
}
