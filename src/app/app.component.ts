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
  imports: [NavbarComponent, HomeComponent, ServicosComponent, SobreComponent, ContatoComponent, FooterComponent, CommonModule]
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
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            if (sectionId) {
              this.visibleSections[sectionId] = true;
            }
          }
        });
      }, { threshold: 0.2 }); // Ativa quando 20% da seção está visível

      this.sections.forEach(section => observer.observe(section.nativeElement));
    }
  }
}
