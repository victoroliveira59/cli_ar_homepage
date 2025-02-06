import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // Certifique-se de importar aqui

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  standalone: true,  // Isso define o componente como standalone
  imports: [ReactiveFormsModule]  // Módulo necessário para formulários reativos
})
export class ContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      console.log(this.contatoForm.value);
    }
  }
}
