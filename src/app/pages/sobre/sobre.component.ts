import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-sobre',
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  sobreEmpresaItems = [
    {
      imgSrc: 'assets/imagens/refrigeradores.jpg',
      titulo: 'Manutenção de Refrigeradores',
      descricao: 'Nosso objetivo é garantir o perfeito funcionamento dos refrigeradores, atendendo as necessidades do cliente com eficiência e qualidade.'
    },
    {
      imgSrc: 'assets/imagens/bebedouros.jpg',
      titulo: 'Manutenção de Bebedouros',
      descricao: 'Realizamos manutenção de bebedouros de todos os modelos, garantindo água limpa e potável sempre disponível.'
    },
    {
      imgSrc: 'assets/imagens/chopeiras.jpg',
      titulo: 'Manutenção de Chopeiras',
      descricao: 'Oferecemos o serviço de manutenção de chopeiras, garantindo que o seu evento ou bar tenha sempre a qualidade do serviço.'
    },
    {
      imgSrc: 'assets/imagens/ar-condicionado.jpg',
      titulo: 'Limpeza de Ar Condicionado',
      descricao: 'A limpeza de ar condicionado é essencial para o bem-estar e a saúde, e nós cuidamos disso com dedicação e profissionalismo.'
    }
  ];
i: any;
}
