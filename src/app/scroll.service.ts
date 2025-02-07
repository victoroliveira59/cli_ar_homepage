import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // O serviço estará disponível globalmente
})
export class ScrollService {

  // Função para rolar suavemente até uma seção específica
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
