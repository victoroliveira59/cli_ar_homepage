import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service'; // Adjusted the path


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContatoComponent implements OnInit {
  contatoForm!: FormGroup;
  enviado = false;
  erro = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      this.apiService.enviarFormulario(this.contatoForm.value).subscribe({
        next: (res) => {
          this.enviado = true;
          console.log('Formulário enviado com sucesso:', res);
        },
        error: (err) => {
          this.erro = 'Erro ao enviar formulário. Tente novamente.';
          console.error('Erro:', err);
        }
      });
    }
  }
}
