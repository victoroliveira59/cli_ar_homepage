import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";

// Importação dos componentes
import { HomeComponent } from "./pages/home/home.component";
import { ServicosComponent } from "./pages/servicos/servicos.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { ContatoComponent } from "./pages/contato/contato.component";
import { FooterComponent } from "./components/footer/footer.component";
import { UrgencyButtonComponent } from "./components/urgency-button/urgency-button.component";
import { NgxSpinnerModule } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    ServicosComponent,
    SobreComponent,
    ContatoComponent,
    FooterComponent,
    CommonModule,
    NgxSpinnerModule,
    UrgencyButtonComponent
  ]
})
export class AppComponent implements AfterViewInit {
  isLoading: boolean = true; // 🔄 Controla o estado do carregamento

  visibleSections: { [key: string]: boolean } = {
    home: false, // ❌ Não carrega imediatamente
    servicos: false,
    sobre: false,
    contato: false
  };

  @ViewChildren('sectionRef') sections!: QueryList<ElementRef>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private spinner: NgxSpinnerService
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.spinner.show(); // 🚀 Mostra o spinner ao iniciar

      setTimeout(() => {
        this.spinner.hide(); // ✅ Esconde o spinner
        this.isLoading = false; // 🔄 Agora podemos exibir a `HomeComponent`
        this.visibleSections['home'] = true; // ✅ Mostra a Home
        this.visibleSections['servicos'] = true;
        this.visibleSections['sobre'] = true;
        this.visibleSections['contato'] = true;
      }, 2000); // Ajuste conforme necessário
    }
  }
}
