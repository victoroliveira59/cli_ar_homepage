import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-servicos',
  standalone: true,  // Adicione isso se for um componente standalone
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']  // Corrigido: era styleUrl, o correto é styleUrls
})
export class ServicosComponent {
  servicos = [
    {
      nome: 'Instalação de Ar-Condicionado',
      descricao: 'Serviço profissional de instalação para garantir o melhor desempenho do seu aparelho.',
      imagem: 'img/boas-praticas-refrigeracao.jpg'
    },
    {
      nome: 'Manutenção Preventiva',
      descricao: 'Evite problemas futuros com uma manutenção regular e eficiente.',
      imagem: 'assets/img/manutencao.jpg'
    },
    {
      nome: 'Limpeza de Filtros',
      descricao: 'Melhore a qualidade do ar com a limpeza adequada dos filtros do seu ar-condicionado.',
      imagem: 'assets/img/limpeza.jpg'
    },
    {
      nome: 'Conserto de Equipamentos',
      descricao: 'Diagnóstico e reparo rápido de falhas em aparelhos de diversas marcas.',
      imagem: 'assets/img/conserto.jpg'
    }
  ]
}
