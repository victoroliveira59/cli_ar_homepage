import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContatoComponent implements OnInit {
  contatoForm!: FormGroup;
  mensagemRetorno: string = '';
  sucesso: boolean = false;
  carregando: boolean = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  formatarTelefone(event: Event): void {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, '');

    if (valor.length > 10) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (valor.length > 6) {
      valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      valor = valor.replace(/^(\d*)/, '($1');
    }

    input.value = valor;
    this.contatoForm.get('telefone')?.setValue(valor, { emitEvent: false });
  }



  onSubmit() {
    if (this.contatoForm.valid) {
      this.carregando = true;
      this.mensagemRetorno = '';

      this.apiService.enviarFormulario(this.contatoForm.value).subscribe({
        next: (res) => {
          this.sucesso = true;
          this.mensagemRetorno = 'E-mail enviado com sucesso!';
          this.carregando = false;
          this.contatoForm.reset();
        },
        error: (err) => {
          this.sucesso = false;
          this.mensagemRetorno = 'Erro ao enviar o e-mail. Tente novamente.';
          this.carregando = false;
        }
      });
    }
  }
}
