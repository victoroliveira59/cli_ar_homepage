import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Componentes do Shell de Layout
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UrgencyButtonComponent } from './components/urgency-button/urgency-button.component';
import { WhatsappModalComponent } from './components/whatsapp-modal/whatsapp-modal.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    UrgencyButtonComponent,
    WhatsappModalComponent
  ]
})
export class AppComponent {}
