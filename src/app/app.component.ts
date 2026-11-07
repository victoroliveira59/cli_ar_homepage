import {
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Importação dos componentes
import { HomeComponent } from "./pages/home/home.component";
import { ServicosComponent } from "./pages/servicos/servicos.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { ContatoComponent } from "./pages/contato/contato.component";
import { FooterComponent } from "./components/footer/footer.component";
import { UrgencyButtonComponent } from "./components/urgency-button/urgency-button.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ArcondicionadoComponent } from "./pages/arcondicionado/arcondicionado.component";
import { WhatsappModalComponent } from "./components/whatsapp-modal/whatsapp-modal.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    ArcondicionadoComponent,
    ServicosComponent,
    SobreComponent,
    ContatoComponent,
    FooterComponent,
    CommonModule,
    UrgencyButtonComponent,
    NavbarComponent,
    WhatsappModalComponent
  ]
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
}
