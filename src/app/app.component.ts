import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { ServicosComponent } from "./pages/servicos/servicos.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { ContatoComponent } from "./pages/contato/contato.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ HomeComponent, ServicosComponent, SobreComponent, ContatoComponent, FooterComponent, CommonModule]
})
export class AppComponent implements AfterViewInit {
  visibleSections: { [key: string]: boolean } = {
    home: true, // O "home" carrega imediatamente
    servicos: false,
    sobre: false,
    contato: false
  };

  @ViewChildren('sectionRef') sections!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.visibleSections['servicos'] = true;
        this.visibleSections['sobre'] = true;
        this.visibleSections['contato'] = true;
      }, 1000); // 3 segundos após a página principal ser carregada
    }
  }
}
