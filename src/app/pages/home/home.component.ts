import {
  Component,
  HostListener,
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { WhatsappModalService } from '../../services/whatsapp-modal.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NgxSpinnerModule]
})
export class HomeComponent implements OnInit, AfterViewInit {
  isContentVisible = false;
  isLoading = true;

  constructor(
    private modalService: WhatsappModalService,
    private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.spinner.show();
    }
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.isContentVisible = true;
      this.isLoading = false;
      if (isPlatformBrowser(this.platformId)) {
        this.spinner.hide();
      }
      this.cdr.detectChanges();
    });
  }

  openWhatsApp(): void {
    this.modalService.open();
  }
}
