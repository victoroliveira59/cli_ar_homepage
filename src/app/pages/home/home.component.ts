import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappModalService } from '../../services/whatsapp-modal.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  isContentVisible = true;
  isLoading = false;

  constructor(
    private modalService: WhatsappModalService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.isContentVisible = true;
    this.isLoading = false;
  }

  openWhatsApp(): void {
    this.modalService.open();
  }
}
