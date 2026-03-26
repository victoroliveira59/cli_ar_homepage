import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  name: string;
  city: string;
  date: string;
  stars: number;
  text: string;
  initial: string;
  color: string;
}

@Component({
  selector: 'app-reviews-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.css']
})
export class ReviewsCarouselComponent {
  currentIndex = 0;

  reviews: Review[] = [
    {
      name: 'Fernanda Oliveira',
      city: 'Nova Lima, MG',
      date: 'Janeiro 2025',
      stars: 5,
      initial: 'F',
      color: '#016086',
      text: 'Excelente atendimento! O técnico chegou no horário combinado, identificou o problema no ar-condicionado rapidinho e resolveu tudo com qualidade. Super recomendo!'
    },
    {
      name: 'Carlos Eduardo',
      city: 'Nova Lima, MG',
      date: 'Dezembro 2024',
      stars: 5,
      initial: 'C',
      color: '#0188B8',
      text: 'Minha geladeira estava com defeito há dias. A Alves Refrigeração veio no mesmo dia que liguei! Serviço impecável e preço justo. Com certeza vou chamar novamente.'
    },
    {
      name: 'Ana Paula Souza',
      city: 'Belo Horizonte, MG',
      date: 'Novembro 2024',
      stars: 5,
      initial: 'A',
      color: '#013D54',
      text: 'Contratei para instalação de dois ar-condicionados split. Trabalho caprichado, limparam tudo após a instalação. Profissionalismo nota 10!'
    },
    {
      name: 'Roberto Mendes',
      city: 'Nova Lima, MG',
      date: 'Outubro 2024',
      stars: 5,
      initial: 'R',
      color: '#00C4E8',
      text: 'Fiz a manutenção preventiva do meu ar. O técnico foi muito educado, explicou tudo que fez e o equipamento ficou como novo. Preço excelente!'
    },
    {
      name: 'Juliana Costa',
      city: 'Nova Lima, MG',
      date: 'Setembro 2024',
      stars: 5,
      initial: 'J',
      color: '#016086',
      text: 'Freezer da minha lanchonete quebrou numa sexta-feira. A Alves veio no sábado de manhã e resolveu tudo! Salvaram meu fim de semana. Muito obrigada!'
    },
    {
      name: 'Marcelo Peixoto',
      city: 'Nova Lima, MG',
      date: 'Agosto 2024',
      stars: 5,
      initial: 'M',
      color: '#0188B8',
      text: 'Higienização do ar-condicionado feita com excelência. Equipe pontual, trabalho rápido e o resultado foi incrível. Ambiente muito mais agradável agora!'
    }
  ];

  get visibleReviews(): Review[] {
    const total = this.reviews.length;
    return [
      this.reviews[this.currentIndex % total],
      this.reviews[(this.currentIndex + 1) % total],
      this.reviews[(this.currentIndex + 2) % total],
    ];
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  goTo(i: number) {
    this.currentIndex = i;
  }

  starsArray(n: number): number[] {
    return Array(n).fill(0);
  }
}
