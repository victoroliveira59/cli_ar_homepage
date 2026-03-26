import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { WhatsappModalService } from '../../services/whatsapp-modal.service';

@Component({
  selector: 'app-arcondicionado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arcondicionado.component.html',
  styleUrls: ['./arcondicionado.component.css']
})
export class ArcondicionadoComponent implements OnInit {

  services = [
    {
      icon: 'fas fa-tools',
      title: 'Instalação Profissional',
      desc: 'Instalação de ar-condicionado split, multi-split e cassete com técnicos certificados. Qualquer marca e modelo em Nova Lima e região.',
      color: '#016086'
    },
    {
      icon: 'fas fa-wrench',
      title: 'Manutenção Preventiva',
      desc: 'Revisão completa do sistema de refrigeração para garantir eficiência energética e prolongar a vida útil do seu equipamento.',
      color: '#0188B8'
    },
    {
      icon: 'fas fa-shower',
      title: 'Higienização Completa',
      desc: 'Limpeza profunda do ar-condicionado com produtos bactericidas. Elimina fungos, bactérias e melhora a qualidade do ar.',
      color: '#00C4E8'
    },
    {
      icon: 'fas fa-fire-extinguisher',
      title: 'Recarga de Gás',
      desc: 'Recarga e verificação do gás refrigerante (R410A, R22, R32). Diagnóstico de vazamentos e correção de defeitos.',
      color: '#013D54'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Assistência de Emergência',
      desc: 'Atendimento urgente para ar-condicionado com defeito. Resposta rápida em Nova Lima para não te deixar no calor.',
      color: '#016086'
     },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Laudo Técnico',
      desc: 'Emissão de laudo técnico para garantia, seguro ou comprovação de manutenção preventiva do ar-condicionado.',
      color: '#0188B8'
    }
  ];

  stats = [
    { value: '2+', label: 'Anos de Experiência' },
    { value: '150+', label: 'Clientes Atendidos' },
    { value: '10+', label: 'Marcas Atendidas' },
    { value: '90 dias', label: 'Garantia de Serviço' }
  ];

  brands = ['Daikin', 'Midea', 'LG', 'Samsung', 'Carrier', 'Gree', 'Fujitsu', 'Electrolux', 'Consul', 'Springer'];

  constructor(
    private waModal: WhatsappModalService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {}

  openWhatsApp() {
    this.waModal.open();
  }
}
