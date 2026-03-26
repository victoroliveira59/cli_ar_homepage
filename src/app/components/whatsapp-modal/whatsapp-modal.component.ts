import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WhatsappModalService } from '../../services/whatsapp-modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-whatsapp-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './whatsapp-modal.component.html',
  styleUrls: ['./whatsapp-modal.component.css']
})
export class WhatsappModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  userMessage = '';
  private sub!: Subscription;

  readonly quickReplies = [
    'Quero instalar ar-condicionado',
    'Preciso de manutenção preventiva',
    'Meu ar-condicionado está com defeito',
    'Solicitar higienização',
    'Recarga de gás refrigerante',
    'Assistência em geladeira/freezer',
  ];

  constructor(
    private modalService: WhatsappModalService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    this.sub = this.modalService.isOpen$.subscribe(open => {
      this.isOpen = open;
      if (isPlatformBrowser(this.platformId)) {
        document.body.style.overflow = open ? 'hidden' : '';
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  close() {
    this.modalService.close();
    this.userMessage = '';
  }

  sendQuickReply(text: string) {
    this.sendToWhatsApp(text);
  }

  sendCustomMessage() {
    const msg = this.userMessage.trim();
    if (!msg) return;
    this.sendToWhatsApp(msg);
  }

  private sendToWhatsApp(text: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5531992855049?text=${encoded}`, '_blank');
    this.close();
  }
}
