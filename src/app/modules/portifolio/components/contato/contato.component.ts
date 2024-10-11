import { Component, inject, ChangeDetectionStrategy, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import {DialogContatoComponent } from '../../../components/dialog/dialog-contato/dialog-contato.component';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {


  constructor(public dialog: MatDialog) {}


  // contato
  contatoForm!: FormGroup;

  // inject do modal
  #dialog = inject(MatDialog)

  // valores do formulário
  nomeUsuario = '';
  emailUsuario = '';
  mensagemUsuario = ''


  // ao iniciar a page..
  ngOnInit(): void {

    // pegando o valor do formulário (exceto a foto pq esta usando bootstrap)
    this.contatoForm = new FormGroup ({
      nome: new FormControl(this.nomeUsuario ? this.nomeUsuario : '', [Validators.required]),
      email: new FormControl(this.emailUsuario ? this.emailUsuario : '', [Validators.required]),
      mensagem: new FormControl(this.mensagemUsuario ? this.mensagemUsuario : '', [Validators.required])
    });

    // pegando dados de  formulário e jogando nas variáveis para uso
    this.contatoForm.valueChanges.subscribe(dadosForm => {
      this.nomeUsuario = dadosForm.nome;
      this.emailUsuario = dadosForm.email;
      this.mensagemUsuario = dadosForm.mensagem;
    });

  }

  // Modal
  public openDialog() {
    this.dialog.open(DialogContatoComponent , {
      data: { nome: this.nomeUsuario }
    });

    console.log(this.contatoForm.value.mensagem);

    const templateParams = {
      nomeUsuario: this.contatoForm.value.nome,
      emailUsuario: this.contatoForm.value.email,
      mensagemUsuario: this.contatoForm.value.mensagem
    };

    // Limpa todos os campos do formulário
    this.contatoForm.reset();

    emailjs.send(
      'dener_pelizario',
      'template_j8fjlzf',
      templateParams,
      'Ge1yJGKIwrMhfHDXC'
    )
      .then((response) => {
        console.log('Email enviado com sucesso!', response.status, response.text);
        this.contatoForm.reset(); // Limpa o formulário após o envio
        // Exibir mensagem de sucesso para o usuário
      }, (error) => {
        console.log('Erro ao enviar email:', error);
        // Exibir mensagem de erro para o usuário
      });
  }


}


