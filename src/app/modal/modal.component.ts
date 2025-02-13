import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [CommonModule]
})
export class ModalComponent {
  @Input() isOpen: boolean = false;  // Controla a visibilidade do modal
  @Input() title: string = '';       // Título do serviço
  @Input() description: string = ''; // Descrição do serviço
  @Output() closeModal = new EventEmitter<void>(); // Evento para fechar o modal

  close() {
    this.closeModal.emit();
  }
}
