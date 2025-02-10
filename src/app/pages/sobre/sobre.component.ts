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
      imgSrc: 'img/logos 1.jpg',
      titulo: 'Manutenção de Refrigeradores de diversas marcas',
      descricao: 'Nosso objetivo é garantir o perfeito funcionamento dos refrigeradores, atendendo as necessidades do cliente com eficiência e qualidade.'
    },
    {
      imgSrc: 'img/bebedouro-com-filtro.jpg',
      titulo: 'Manutenção de Bebedouros ',
      descricao: 'Realizamos manutenção de bebedouros de todos os modelos, garantindo água limpa e potável sempre disponível.'
    },
    {
      imgSrc: 'img/chopeira.jpg',
      titulo: 'Manutenção de Chopeiras',
      descricao: 'Oferecemos o serviço de manutenção de chopeiras, garantindo que o seu evento ou bar tenha sempre a qualidade do serviço.'
    },
    {
      imgSrc: 'img/Geladeira.png',
      titulo: 'Manutenção em Geladeiras',
      descricao: 'Realizamos manutenção de geladeiras de todos os modelos, garantindo a qualidade e eficiência do serviço prestado.'
    }
  ];
i: any;
}
