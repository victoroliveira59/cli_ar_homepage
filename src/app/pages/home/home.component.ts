import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importando o RouterModule
import { ScrollService } from '../../scroll.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterModule] // Adicionando RouterModule no campo imports
  // Adicionando RouterModule no campo imports
})
export class HomeComponent {
  constructor(private scrollService: ScrollService) { } // Injete o serviço

  // Método para rolar para a seção 'servicos'
  goToServicos(): void {
    this.scrollService.scrollToSection('contato'); // Chama o método do serviço
  }
}
